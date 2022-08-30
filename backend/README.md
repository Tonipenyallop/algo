# Register

input:

- registerRequest
  _ username : string - unique username for identifying the new account
  _ password : string - unique password for the new account

output:

- registerResponse
  - token : string - identify authenticated user

# GetCurrentPosition

input :

- getCurrentPositionRequest
  - token : string - identify authenticated user

output:

- getCurrentPositionRequest
  - position : list[int] - identify where the current position is
