# Register
input:
* registerRequest
    * username : string - unique username for identifying the new account 
    * password : string - unique password for the new account


# GetCurrentPosition
input : 
* getCurrentPositionRequest
    * token : string - identify authenticated user

output:
* getCurrentPositionRequest
    * position : list[int] - identify where the current position is 

 