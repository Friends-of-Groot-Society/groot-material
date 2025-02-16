
INSERT INTO nft_address_stamp (
  id, version, date_created, time_created, last_updated, time_updated,
  nft_address_stamp, native_token, nft_token
)
VALUES
  (1, 1, '2025-02-14 13:00:00', '2025-02-14 13:00:00', '2025-02-14 13:00:00', '2025-02-14 13:00:00',
   'StampOne', 10.5, 3.2),
  (2, 1, '2025-02-14 13:15:00', '2025-02-14 13:15:00', '2025-02-14 13:15:00', '2025-02-14 13:15:00',
   'StampTwo', 50.0, 1.1),
  (3, 1, '2025-02-14 13:30:00', '2025-02-14 13:30:00', '2025-02-14 13:30:00', '2025-02-14 13:30:00',
   'StampThree', 0.0, 100.0);

-- 1) ROLES: 3 rows
INSERT INTO roles (id, name)
VALUES
  (1, 'ROLE_ADMIN'),
  (2, 'ROLE_USER'),
  (3, 'ROLE_MANAGER');

-- 1) USERS: 3 rows
INSERT INTO users (
  userid, username, password, lastname, firstname,
  usertype, email, organizationcode, cusurl, dashboardcode,
  isactive, contacttype
)
VALUES
  (1, 'alice', 'passAlice', 'Wonderland', 'Alice', 1, 'alice@example.com', 'ORG001', 'https://example.com/alice', 'DASH-A', 1, 101),
  (2, 'bob', 'passBob', 'Marley', 'Bob', 2, 'bob@example.com', 'ORG002', 'https://example.com/bob', 'DASH-B', 1, 102),
  (3, 'charlie', 'passCharlie', 'Brown', 'Charlie', 3, 'charlie@example.com', 'ORG003', 'https://example.com/charlie', 'DASH-C', 0, 103);

-- 1) METADATA: 3 rows (no direct FKs)
INSERT INTO metadata (
  id, version, date_created, time_created, last_updated, time_updated,
  name, description, image, nft
)
VALUES
  (1, 1, '2025-02-14', '2025-02-14', '2025-02-14', '2025-02-14', 'MetaOne', 'DescriptionOne', 'https://images.example.com/img1.png', 'NFT-ONE'),
  (2, 1, '2025-02-14', '2025-02-14', '2025-02-14', '2025-02-14', 'MetaTwo', 'DescriptionTwo', 'https://images.example.com/img2.png', 'NFT-TWO'),
  (3, 1, '2025-02-14', '2025-02-14', '2025-02-14', '2025-02-14', 'MetaThree', 'DescriptionThree', 'https://images.example.com/img3.png', 'NFT-THREE');

-- 1) WEBLINKS: 3 rows (no direct FKs)
INSERT INTO weblinks (
  id, version, date_created, time_created, last_updated, time_updated,
  url, host, htmlpage, downloadstatus
)
VALUES
  (1, 1, '2025-02-14', '2025-02-14', '2025-02-14', '2025-02-14', 'https://example.com', 'example.com', '<html>...</html>', 1),
  (2, 1, '2025-02-14', '2025-02-14', '2025-02-14', '2025-02-14', 'https://foo.com', 'foo.com', '<html>...</html>', 0),
  (3, 1, '2025-02-14', '2025-02-14', '2025-02-14', '2025-02-14', 'https://bar.com', 'bar.com', '<html>...</html>', 1);

-- 2) CHAIN: references ADDRESSES(id) in chain_address_id
INSERT INTO chain (
  id, version, date_created, time_created, last_updated, time_updated,
  name, symbol, description, long_description, icon_url, category, chain_list_icon,
  rpc_url, chain_id, block_explorer_url, chain_address_id
)
VALUES
  (1, 1, '2025-02-14 14:00:00', '2025-02-14 14:00:00', '2025-02-14 14:00:00', '2025-02-14 14:00:00',
   'Ethereum', 'ETH', 'Ethereum mainnet', 'Some extended description', 'https://icons.example.com/eth.png',
   'DeFi', 'https://icons.example.com/ethlist.png', 'https://rpc.eth.com', 1, 'https://explorer.eth.com', 1),
  (2, 1, '2025-02-14 14:15:00', '2025-02-14 14:15:00', '2025-02-14 14:15:00', '2025-02-14 14:15:00',
   'Polygon', 'MATIC', 'Polygon sidechain', 'Another extended description', 'https://icons.example.com/matic.png',
   'Layer2', 'https://icons.example.com/maticlist.png', 'https://rpc.matic.com', 137, 'https://explorer.matic.com', 2),
  (3, 1, '2025-02-14 14:30:00', '2025-02-14 14:30:00', '2025-02-14 14:30:00', '2025-02-14 14:30:00',
   'Binance Smart Chain', 'BNB', 'Binance chain', 'Yet another description', 'https://icons.example.com/bnb.png',
   'BSC', 'https://icons.example.com/bnblist.png', 'https://rpc.bsc.com', 56, 'https://explorer.bsc.com', 3);

-- 3) NEWS: references CATEGORIES(id) in category_id
INSERT INTO news (
  id, title, url, category_id
)
VALUES
  (1, 'AI Breakthrough', 'https://example.com/ai', 1),
  (2, 'Health Discovery', 'https://example.com/health', 2),
  (3, 'Championship Roundup', 'https://example.com/sports', 3);

-- 4) NFT: references NFT_ADDRESS_STAMP(id) in nft_id
INSERT INTO nft (
  id, version, date_created, time_created, last_updated, time_updated,
  name, amount, metadata, nft_address, nft_id
)
VALUES
  (1, 1, '2025-02-14', '2025-02-14', '2025-02-14', '2025-02-14',
   'NFT One', 10.0, 'MetaRefOne', '0xnft1', 1),
  (2, 1, '2025-02-14', '2025-02-14', '2025-02-14', '2025-02-14',
   'NFT Two', 20.5, 'MetaRefTwo', '0xnft2', 2),
  (3, 1, '2025-02-14', '2025-02-14', '2025-02-14', '2025-02-14',
   'NFT Three', 5.0, 'MetaRefThree', '0xnft3', 3);

-- 5) RAW_TOKEN: references NFT_ADDRESS_STAMP(id) in nftaddress_id
INSERT INTO raw_token (
  id, version, date_created, time_created, last_updated, time_updated,
  raw_token, nftaddress_id
)
VALUES
  (1, 1, '2025-02-14', '2025-02-14', '2025-02-14', '2025-02-14', 'RawTokenOne', 1),
  (2, 1, '2025-02-14', '2025-02-14', '2025-02-14', '2025-02-14', 'RawTokenTwo', 2),
  (3, 1, '2025-02-14', '2025-02-14', '2025-02-14', '2025-02-14', 'RawTokenThree', 3);

-- 6) NFT_ADDRESS_STAMP_NFTS: references NFT_ADDRESS_STAMP(id), NFT(id)
INSERT INTO nft_address_stamp_nfts (
  nft_address_id, nfts_id
)
VALUES
  (1, 1),
  (2, 2),
  (3, 3);

-- 7) USERS_ROLES: references ROLES(id), USERS(userid)
INSERT INTO users_roles (role_id, user_id)
VALUES
  (1, 1),
  (2, 2),
  (3, 3);
