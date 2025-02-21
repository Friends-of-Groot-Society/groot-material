INSERT INTO addresses (
  id, version, date_created, time_created, last_updated, time_updated,
  description, owner, address, icon_url, block_explorer_url, nft_address, email
)
VALUES
  (
    1,                         -- Manually assigning ID=1
    1,                         -- version
    '2025-02-15 10:00:00',     -- date_created
    '2025-02-15 10:00:00',     -- time_created
    '2025-02-15 10:00:00',     -- last_updated
    '2025-02-15 10:00:00',     -- time_updated
    'Main ETH wallet',         -- description
    'Alice',                   -- owner
    '0xAbC12345def...',        -- address (typical crypto address)
    'https://icons.example/eth.png',    -- icon_url
    'https://etherscan.io',            -- block_explorer_url
    '0xAbC12345def...',                -- nft_address (can match address, if needed)
    'alice@crypto.com'                 -- email
  );
INSERT INTO categories (id, name, description)
VALUES
  (
    1,
    'DeFi',
    'Decentralized Finance protocols and news'
  );
INSERT INTO chain (
  id, version, date_created, time_created, last_updated, time_updated,
  name, symbol, description, long_description, icon_url, category,
  chain_list_icon, rpc_url, chain_id, block_explorer_url, chain_address_id
)
VALUES
  (
    1,
    1,
    '2025-02-15 11:00:00',
    '2025-02-15 11:00:00',
    '2025-02-15 11:00:00',
    '2025-02-15 11:00:00',
    'Ethereum Mainnet',
    'ETH',
    'Layer-1 Proof-of-Stake chain',
    'Used for DeFi, NFTs, and more',
    'https://icons.example/eth-chain.png',
    'DeFi',                     -- Just a string category, not a FK
    'https://icons.example/eth-list.png',
    'https://rpc.ethereum.org', -- Example RPC
    1,                          -- chain_id
    'https://etherscan.io',     -- block_explorer_url
    1                           -- chain_address_id -> references addresses(id=1)
  );
INSERT INTO attribute (
  attrid, version, date_created, time_created, last_updated, time_updated,
  attribute_value, trait_type
)
VALUES
  (1, 1, '2025-02-16 09:00:00', '2025-02-16 09:00:00', '2025-02-16 09:00:00', '2025-02-16 09:00:00', 'Gold', 'Rarity'),
  (2, 1, '2025-02-16 09:10:00', '2025-02-16 09:10:00', '2025-02-16 09:10:00', '2025-02-16 09:10:00', 'Immune', 'Buff'),
  (3, 1, '2025-02-16 09:20:00', '2025-02-16 09:20:00', '2025-02-16 09:20:00', '2025-02-16 09:20:00', 'Sparkling', 'Effect');

INSERT INTO metadata (
  id, version, date_created, time_created, last_updated, time_updated,
  name, description, image, nft
)
VALUES
  (1, 1, '2025-02-16 10:00:00', '2025-02-16 10:00:00', '2025-02-16 10:00:00', '2025-02-16 10:00:00',
   'MetaOne', 'First NFT metadata', 'https://images.example.com/meta1.png', 'NFT-One'),
  (2, 1, '2025-02-16 10:05:00', '2025-02-16 10:05:00', '2025-02-16 10:05:00', '2025-02-16 10:05:00',
   'MetaTwo', 'Second NFT data', 'https://images.example.com/meta2.png', 'NFT-Two'),
  (3, 1, '2025-02-16 10:10:00', '2025-02-16 10:10:00', '2025-02-16 10:10:00', '2025-02-16 10:10:00',
   'MetaThree', 'Third NFT data', 'https://images.example.com/meta3.png', 'NFT-Three');

INSERT INTO weblinks (
  id, version, date_created, time_created, last_updated, time_updated,
  url, host, htmlpage, downloadstatus
)
VALUES
  (1, 1, '2025-02-16 11:00:00', '2025-02-16 11:00:00', '2025-02-16 11:00:00', '2025-02-16 11:00:00',
   'https://cryptoexample.com', 'cryptoexample.com', '<html>Crypto Content</html>', 1),
  (2, 1, '2025-02-16 11:10:00', '2025-02-16 11:10:00', '2025-02-16 11:10:00', '2025-02-16 11:10:00',
   'https://definance.org', 'definance.org', '<html>DeFi Info</html>', 0),
  (3, 1, '2025-02-16 11:20:00', '2025-02-16 11:20:00', '2025-02-16 11:20:00', '2025-02-16 11:20:00',
   'https://nftshowcase.io', 'nftshowcase.io', '<html>NFT Showcase</html>', 1);
INSERT INTO roles (id, name)
VALUES
  (1, 'ROLE_ADMIN'),
  (2, 'ROLE_USER'),
  (3, 'ROLE_MANAGER');
INSERT INTO users (
  userid, username, password, lastname, firstname,
  usertype, email, organizationcode, cusurl,
  dashboardcode, isactive, contacttype
)
VALUES
  (1, 'satoshi', 'pass123', 'Nakamoto', 'Satoshi', 1, 'satoshi@bitcoin.org', 'ORG-BTC', 'https://bitcoin.org', 'DASH-SAT', 1, 101),
  (2, 'vitalik', 'pass456', 'Buterin', 'Vitalik', 2, 'vitalik@ethereum.org', 'ORG-ETH', 'https://ethereum.org', 'DASH-VIT', 1, 102),
  (3, 'charles', 'pass789', 'Hoskinson', 'Charles', 3, 'charles@cardano.org', 'ORG-ADA', 'https://cardano.org', 'DASH-CHAR', 1, 103);

INSERT INTO users_roles (role_id, user_id)
VALUES
  (1, 1),  -- Satoshi is ROLE_ADMIN
  (2, 2),  -- Vitalik is ROLE_USER
  (3, 3);  -- Charles is ROLE_MANAGER
INSERT INTO news (id, title, url, category_id)
VALUES
  (1, 'BTC Surges', 'https://cryptoexample.com/btc-surges', 1),
  (2, 'Healthy Mining Rigs', 'https://cryptoexample.com/healthy-mining', 2),
  (3, 'eSports Gains', 'https://cryptoexample.com/esports', 3);

INSERT INTO coin (
  id, version, date_created, time_created, last_updated, time_updated,
  coin, native_token, nft_token
)
VALUES
  (1, 1, '2025-02-16 12:00:00', '2025-02-16 12:00:00', '2025-02-16 12:00:00', '2025-02-16 12:00:00',
   'StampAlpha', 10.0, 3.0),
  (2, 1, '2025-02-16 12:05:00', '2025-02-16 12:05:00', '2025-02-16 12:05:00', '2025-02-16 12:05:00',
   'StampBeta', 0.0, 100.0),
  (3, 1, '2025-02-16 12:10:00', '2025-02-16 12:10:00', '2025-02-16 12:10:00', '2025-02-16 12:10:00',
   'StampGamma', 50.0, 5.0);

INSERT INTO coin (
  id, version, date_created, time_created, last_updated, time_updated,
  coin, native_token, nft_token
)
VALUES
  (1, 1, '2025-02-16 12:00:00', '2025-02-16 12:00:00', '2025-02-16 12:00:00', '2025-02-16 12:00:00',
   'StampAlpha', 10.0, 3.0),
  (2, 1, '2025-02-16 12:05:00', '2025-02-16 12:05:00', '2025-02-16 12:05:00', '2025-02-16 12:05:00',
   'StampBeta', 0.0, 100.0),
  (3, 1, '2025-02-16 12:10:00', '2025-02-16 12:10:00', '2025-02-16 12:10:00', '2025-02-16 12:10:00',
   'StampGamma', 50.0, 5.0);

INSERT INTO raw_token (
  id, version, date_created, time_created, last_updated, time_updated,
  raw_token, nftaddress_id
)
VALUES
  (1, 1, '2025-02-16 12:35:00', '2025-02-16 12:35:00', '2025-02-16 12:35:00', '2025-02-16 12:35:00',
   'RAWTOKEN-ALPHA', 1),
  (2, 1, '2025-02-16 12:40:00', '2025-02-16 12:40:00', '2025-02-16 12:40:00', '2025-02-16 12:40:00',
   'RAWTOKEN-BETA', 2),
  (3, 1, '2025-02-16 12:45:00', '2025-02-16 12:45:00', '2025-02-16 12:45:00', '2025-02-16 12:45:00',
   'RAWTOKEN-GAMMA', 3);

INSERT INTO nft_address_stamp_nfts (nft_address_id, nfts_id)
VALUES
  (1, 1),
  (2, 2),
  (3, 3);
