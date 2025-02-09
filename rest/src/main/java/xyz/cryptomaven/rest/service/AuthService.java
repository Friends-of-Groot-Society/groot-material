package xyz.cryptomaven.rest.service;

import xyz.cryptomaven.rest.models.dto.LoginDto;
import xyz.cryptomaven.rest.models.dto.RegisterDto;

public interface AuthService {
    String login(LoginDto loginDto);

    String register(RegisterDto registerDto);
}
