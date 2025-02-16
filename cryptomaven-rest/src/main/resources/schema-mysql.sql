CREATE TABLE addresses
(
  id                 BIGINT AUTO_INCREMENT NOT NULL,
  version            INT                   NULL,
  date_created       datetime              NULL,
  time_created       datetime              NULL,
  last_updated       datetime              NULL,
  time_updated       datetime              NULL,
  `description`      VARCHAR(255)          NULL,
  owner              VARCHAR(255)          NULL,
  address            VARCHAR(255)          NULL,
  icon_url           VARCHAR(255)          NULL,
  block_explorer_url VARCHAR(255)          NULL,
  nft_address        VARCHAR(255)          NULL,
  CONSTRAINT pk_addresses PRIMARY KEY (id)
);

CREATE TABLE attribute
(
  attrid          BIGINT       NOT NULL,
  version         INT          NULL,
  date_created    datetime     NULL,
  time_created    datetime     NULL,
  last_updated    datetime     NULL,
  time_updated    datetime     NULL,
  attribute_value VARCHAR(255) NULL,
  trait_type      VARCHAR(255) NULL,
  CONSTRAINT pk_attribute PRIMARY KEY (attrid)
);

CREATE TABLE categories
(
  id            BIGINT AUTO_INCREMENT NOT NULL,
  name          VARCHAR(255)          NULL,
  `description` VARCHAR(255)          NULL,
  CONSTRAINT pk_categories PRIMARY KEY (id)
);

CREATE TABLE chain
(
  id                 BIGINT AUTO_INCREMENT NOT NULL,
  version            INT                   NULL,
  date_created       datetime              NULL,
  time_created       datetime              NULL,
  last_updated       datetime              NULL,
  time_updated       datetime              NULL,
  name               VARCHAR(255)          NULL,
  symbol             VARCHAR(255)          NULL,
  `description`      VARCHAR(255)          NULL,
  long_description   VARCHAR(255)          NULL,
  icon_url           VARCHAR(255)          NULL,
  category           VARCHAR(255)          NULL,
  chain_list_icon    VARCHAR(255)          NULL,
  rpc_url            VARCHAR(255)          NULL,
  chain_id           INT                   NULL,
  block_explorer_url VARCHAR(255)          NULL,
  chain_address_id   BIGINT                NULL,
  CONSTRAINT pk_chain PRIMARY KEY (id)
);

CREATE TABLE metadata
(
  id            BIGINT       NOT NULL,
  version       INT          NULL,
  date_created  datetime     NULL,
  time_created  datetime     NULL,
  last_updated  datetime     NULL,
  time_updated  datetime     NULL,
  name          VARCHAR(255) NULL,
  `description` VARCHAR(255) NULL,
  image         VARCHAR(255) NULL,
  nft           VARCHAR(255) NULL,
  CONSTRAINT pk_metadata PRIMARY KEY (id)
);

CREATE TABLE news
(
  id          BIGINT AUTO_INCREMENT NOT NULL,
  title       VARCHAR(255)          NULL,
  url         VARCHAR(255)          NULL,
  category_id BIGINT                NULL,
  CONSTRAINT pk_news PRIMARY KEY (id)
);

CREATE TABLE nft
(
  id           BIGINT AUTO_INCREMENT NOT NULL,
  version      INT                   NULL,
  date_created datetime              NULL,
  time_created datetime              NULL,
  last_updated datetime              NULL,
  time_updated datetime              NULL,
  name         VARCHAR(255)          NULL,
  amount       DOUBLE                NOT NULL,
  metadata     VARCHAR(255)          NULL,
  nft_address  VARCHAR(255)          NULL,
  nft_id       BIGINT                NULL,
  CONSTRAINT pk_nft PRIMARY KEY (id)
);

CREATE TABLE nft_address_stamp
(
  id                BIGINT AUTO_INCREMENT NOT NULL,
  version           INT                   NULL,
  date_created      datetime              NULL,
  time_created      datetime              NULL,
  last_updated      datetime              NULL,
  time_updated      datetime              NULL,
  nft_address_stamp VARCHAR(255)          NULL,
  native_token      DOUBLE                NULL,
  nft_token         DOUBLE                NULL,
  CONSTRAINT pk_nft_address_stamp PRIMARY KEY (id)
);

CREATE TABLE nft_address_stamp_nfts
(
  nft_address_id BIGINT NOT NULL,
  nfts_id        BIGINT NOT NULL
);

CREATE TABLE raw_token
(
  id            BIGINT AUTO_INCREMENT NOT NULL,
  version       INT                   NULL,
  date_created  datetime              NULL,
  time_created  datetime              NULL,
  last_updated  datetime              NULL,
  time_updated  datetime              NULL,
  raw_token     VARCHAR(255)          NULL,
  nftaddress_id BIGINT                NULL,
  CONSTRAINT pk_raw_token PRIMARY KEY (id)
);

CREATE TABLE roles
(
  id   BIGINT AUTO_INCREMENT NOT NULL,
  name VARCHAR(255)          NOT NULL,
  CONSTRAINT pk_roles PRIMARY KEY (id)
);

CREATE TABLE users
(
  userid           BIGINT AUTO_INCREMENT NOT NULL,
  username         VARCHAR(255)          NULL,
  password         VARCHAR(255)          NULL,
  lastname         VARCHAR(255)          NULL,
  firstname        VARCHAR(255)          NULL,
  usertype         INT                   NULL,
  email            VARCHAR(255)          NOT NULL,
  organizationcode VARCHAR(255)          NULL,
  cusurl           VARCHAR(255)          NULL,
  dashboardcode    VARCHAR(255)          NULL,
  isactive         INT                   NULL,
  contacttype      INT                   NULL,
  CONSTRAINT pk_users PRIMARY KEY (userid)
);

CREATE TABLE users_roles
(
  role_id BIGINT NOT NULL,
  user_id BIGINT NOT NULL,
  CONSTRAINT pk_users_roles PRIMARY KEY (role_id, user_id)
);

CREATE TABLE weblinks
(
  id             BIGINT AUTO_INCREMENT NOT NULL,
  version        INT                   NULL,
  date_created   datetime              NULL,
  time_created   datetime              NULL,
  last_updated   datetime              NULL,
  time_updated   datetime              NULL,
  url            VARCHAR(255)          NULL,
  host           VARCHAR(255)          NULL,
  htmlpage       VARCHAR(255)          NULL,
  downloadstatus SMALLINT              NULL,
  CONSTRAINT pk_weblinks PRIMARY KEY (id)
);

ALTER TABLE nft_address_stamp_nfts
  ADD CONSTRAINT uc_nft_address_stamp_nfts_nfts UNIQUE (nfts_id);

ALTER TABLE roles
  ADD CONSTRAINT uc_roles_name UNIQUE (name);

ALTER TABLE chain
  ADD CONSTRAINT FK_CHAIN_ON_CHAIN_ADDRESS FOREIGN KEY (chain_address_id) REFERENCES addresses (id);

ALTER TABLE news
  ADD CONSTRAINT FK_NEWS_ON_CATEGORY FOREIGN KEY (category_id) REFERENCES categories (id);

ALTER TABLE nft
  ADD CONSTRAINT FK_NFT_ON_NFT FOREIGN KEY (nft_id) REFERENCES nft_address_stamp (id);

ALTER TABLE raw_token
  ADD CONSTRAINT FK_RAW_TOKEN_ON_NFTADDRESS FOREIGN KEY (nftaddress_id) REFERENCES nft_address_stamp (id);

ALTER TABLE nft_address_stamp_nfts
  ADD CONSTRAINT fk_nftaddstanft_on_nft FOREIGN KEY (nfts_id) REFERENCES nft (id);

ALTER TABLE nft_address_stamp_nfts
  ADD CONSTRAINT fk_nftaddstanft_on_nft_address FOREIGN KEY (nft_address_id) REFERENCES nft_address_stamp (id);

ALTER TABLE users_roles
  ADD CONSTRAINT fk_userol_on_role FOREIGN KEY (role_id) REFERENCES roles (id);

ALTER TABLE users_roles
  ADD CONSTRAINT fk_userol_on_user FOREIGN KEY (user_id) REFERENCES users (userid);



-- 1) ADDRESSES: 3 rows
INSERT INTO addresses (
  id, version, date_created, time_created, last_updated, time_updated,
  description, owner, address, icon_url, block_explorer_url, nft_address
)
VALUES
  (1, 1, '2025-02-14 10:00:00', '2025-02-14 10:00:00', '2025-02-14 10:00:00', '2025-02-14 10:00:00',
   'Main address', 'Alice', '0x12345...', 'https://icons.example.com/icon1.png', 'https://explorer1.com', '0xabc...'),
  (2, 1, '2025-02-14 11:00:00', '2025-02-14 11:00:00', '2025-02-14 11:00:00', '2025-02-14 11:00:00',
   'Backup address', 'Bob', '0x67890...', 'https://icons.example.com/icon2.png', 'https://explorer2.com', '0xdef...'),
  (3, 1, '2025-02-14 12:00:00', '2025-02-14 12:00:00', '2025-02-14 12:00:00', '2025-02-14 12:00:00',
   'Spare address', 'Charlie', '0x55555...', 'https://icons.example.com/icon3.png', 'https://explorer3.com', '0x123abc...');

-- 1) ATTRIBUTE: 3 rows (no FKs)
INSERT INTO attribute (
  attrid, version, date_created, time_created, last_updated, time_updated,
  attribute_value, trait_type
)
VALUES
  (1, 1, '2025-02-14', '2025-02-14', '2025-02-14', '2025-02-14', 'Red', 'Color'),
  (2, 1, '2025-02-14', '2025-02-14', '2025-02-14', '2025-02-14', 'XL', 'Size'),
  (3, 1, '2025-02-14', '2025-02-14', '2025-02-14', '2025-02-14', 'Sharp', 'Quality');

-- 1) CATEGORIES: 3 rows
INSERT INTO categories (
  id, name, description
)
VALUES
  (1, 'Tech', 'Technology news'),
  (2, 'Health', 'Health & wellness'),
  (3, 'Sports', 'Sports updates');
