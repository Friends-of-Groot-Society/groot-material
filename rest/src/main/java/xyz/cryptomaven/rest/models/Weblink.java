package xyz.cryptomaven.rest.models;

import xyz.cryptomaven.rest.util.Shareable;
import lombok.*;

import jakarta.persistence.*;


@Entity
@Table(name = "WEBLINKS")
public class Weblink extends Bookmark implements Shareable {
	@Id
//	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "ID_MAKER" )
//	@SequenceGenerator(name = "ID_MAKER", sequenceName = "ID_MAKER", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="ID")
	private long id;
	@Column(name="URL")
	private String url;
	@Column(name="HOST")
	private String host;
	@Column(name="HTMLPAGE")
	private String htmlPage;
	@Column(name="DOWNLOADSTATUS")
	private DownloadStatus downloadStatus = DownloadStatus.NOT_ATTEMPTED;



	public enum DownloadStatus {
		NOT_ATTEMPTED,
		SUCCESS,
		FAILED,
		NOT_ELIGIBLE;
	}
	@Override
	public String getItemData() {
		StringBuilder builder = new StringBuilder();
		builder.append("<item>");
		builder.append("<type>WebLink</type>");
		builder.append("<title>").append(getTitle()).append("</title>");
		builder.append("<url>").append(url).append("</url>");
		builder.append("<host>").append(host).append("</host>");
		builder.append("</item>");
		return builder.toString();
	}
	@Override
	public boolean isWeb3Link() {
		return true;
	}

}
