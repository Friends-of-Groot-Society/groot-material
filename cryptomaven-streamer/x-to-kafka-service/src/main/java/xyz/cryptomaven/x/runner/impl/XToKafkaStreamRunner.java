package xyz.cryptomaven.x.runner.impl;

 import xyz.cryptomaven.x.config.XToKafkaServiceConfigData;
 import xyz.cryptomaven.x.listener.XToKafkaStatusListener;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Component;
import twitter4j.FilterQuery;
import twitter4j.TwitterException;
import twitter4j.TwitterStream;
import twitter4j.TwitterStreamFactory;
import xyz.cryptomaven.x.runner.StreamRunner;

import javax.annotation.PreDestroy;
import java.util.Arrays;

@Component
@ConditionalOnProperty(name = "x-to-kafka-service.enable-mock-tweets", havingValue = "false", matchIfMissing = false)
public class XToKafkaStreamRunner implements StreamRunner {

    private static final Logger LOG = LoggerFactory.getLogger(XToKafkaStreamRunner.class);

    private final XToKafkaServiceConfigData xToKafkaServiceConfigData;

    private final xyz.cryptomaven.x.listener.XToKafkaStatusListener XToKafkaStatusListener;

    private  TwitterStream twitterStream;

    public XToKafkaStreamRunner(XToKafkaServiceConfigData configData,
                                XToKafkaStatusListener statusListener ) {
        this.xToKafkaServiceConfigData = configData;
        this.XToKafkaStatusListener = statusListener;
    }

    @Override
    public void start() throws TwitterException {
        twitterStream = new TwitterStreamFactory().getInstance();
        twitterStream.addListener(XToKafkaStatusListener);
        addFilter();
    }

    @PreDestroy
    public void shutdown() {
        if (twitterStream != null) {
            LOG.info("Closing twitter stream!");
            twitterStream.shutdown();
        }
    }

    private void addFilter() {
        String[] keywords = xToKafkaServiceConfigData.getXKeywords().toArray(new String[0]);
        FilterQuery filterQuery = new FilterQuery(keywords);
        twitterStream.filter(filterQuery);
        LOG.info("Started filtering twitter stream for keywords {}", Arrays.toString(keywords));
    }
}
