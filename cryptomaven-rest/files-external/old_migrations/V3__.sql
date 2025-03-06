ALTER TABLE metadata
  ADD external_url VARCHAR(255) NULL;

ALTER TABLE attribute
  ADD tokenid BIGINT NULL;

ALTER TABLE nft
  ADD CONSTRAINT FK_NFT_ON_ID FOREIGN KEY (id) REFERENCES metadata (id);

ALTER TABLE attribute
  ADD CONSTRAINT TOKENID FOREIGN KEY (tokenid) REFERENCES metadata (id);

ALTER TABLE nft
  DROP COLUMN metadata;

ALTER TABLE metadata
  DROP COLUMN nft;
