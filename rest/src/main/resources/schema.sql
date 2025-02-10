create table if not exists CHAIN
(
  id int auto_increment not null primary key,
  name varchar(255) not null,
  symbol varchar(255) not null,
  chain_address_id int,
  date_created timestamp,
  last_updated timestamp
);

create table if not exists ADDRESSES
(
  id int auto_increment not null primary key,
  street varchar(255) not null,
  city varchar(255) not null,
  state varchar(255) not null,
  zip_code varchar(10) not null,
  country varchar(255) not null,
  date_created timestamp,
  last_updated timestamp
);

create table if not exists ROLES
(
  id int auto_increment not null primary key,
  name varchar(255) not null
);
create table if not exists USERS
(
  userid           int auto_increment not null
    primary key,
  contacttype      int          null,
  cusurl           varchar(255) null,
  dashboardcode    varchar(255) null,
  email            varchar(255) not null,
  firstname        varchar(255) null,
  isactive         int          null,
  lastname         varchar(255) null,
  organizationcode varchar(255) null,
  password         varchar(255) null,
  usertype         int          null,
  username         varchar(255) null
);

create table if not exists USERS_ROLES
(
  user_id  int not null,
  role_id int not null,
  primary key (user_id, role_id),
  constraint FK2o0jvgh89lemvvo17cbqvdxaa
    foreign key (user_id) references USERS (userid),
  constraint FKj6m8fwv7oqv74fcehir1a9ffy
    foreign key (role_id) references ROLES (id)
);

create table if not exists USERS_SEQ
(
  next_val bigint null
);
