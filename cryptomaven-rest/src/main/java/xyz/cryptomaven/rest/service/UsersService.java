package xyz.cryptomaven.rest.service;

import xyz.cryptomaven.rest.models.dto.LoginDto;
import xyz.cryptomaven.rest.models.dto.RegisterDto;
import xyz.cryptomaven.rest.models.dto.UserDto;

import java.util.List;
import java.util.Optional;


public interface UsersService {

  UserDto loginUser(String username, String password);
  String login(LoginDto loginDto);
  public UserDto createUser(UserDto user);
  String register(RegisterDto registerDto);
  public Optional<UserDto> getUser(Long id);
  public Optional<UserDto> getUser(String username );
  public List<UserDto> getUsers();

  public Optional<UserDto> updateUser(UserDto change);

  UserDto getUserByEmailAndPassword(String email, String pw);

//	public List<User> getUsersWithCoins();

  Optional<UserDto> updateUserById(Integer userId, UserDto user);

  Optional<UserDto> patchUserById(Integer userId, UserDto user);

  public boolean deleteUser(String username);

  boolean deleteUser(UserDto user);

  Optional<UserDto> getUserByEmail(String email);
}
