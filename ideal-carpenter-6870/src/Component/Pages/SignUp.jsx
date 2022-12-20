
import { useState } from "react";
 
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom"
 import styles from  "../Pages/Authentication/Auth.module.css"

 
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
 
const InitialData = {
    name:"",
    email: "",
    phone:"",
    password: ""
}
 
 
const SignUp = () => {
  const [Password, setPassword] = useState(false);
  const Handleclick = () => setPassword(!Password);
 
  const [LoginData , setLoginData] = useState(InitialData);
 
  const Navigate = useNavigate()
 
 
 
   const HandleOnChange = (e)=>{
    setLoginData({...LoginData,[e.target.name]:e.target.value})
   }
 
   const HandleSubmit = (e)=>{
       e.preventDefault();
       console.log(LoginData)
       LoginDataDetails(LoginData);
       
       setLoginData(InitialData)
        return  Navigate("/gotologin")

   }
 
  const LoginDataDetails = async(LoginData)=>{
    try{
        let res = await fetch(`https://abhinandan.onrender.com/login`,{
            method:"POST",
            body:JSON.stringify(LoginData),
            headers: {
              "content-type":"application/json"
            },
          });
          let data = await res.json();
          console.log("Login Data" , data)
    }
    catch(e){
        console.log(e)
    }
  }
 
 
 
 
  return (
    <div className={styles.LoginContainer}>
    <Flex
      flexDirection="column"
      width="90wh"
      height="50vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
       className={styles.FormBox}
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Heading size={500} color="#181064">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form  onSubmit={HandleSubmit}  >
            <Stack
              spacing={15}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
                 <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                
                  />
                  <Input name="name" className={styles.FormControl} value={LoginData.name}  onChange={HandleOnChange}    type="text" placeholder="Full Name" />
                </InputGroup>
              </FormControl>
 
 
 
 
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                   
                  />
                  <Input name="email" className={styles.FormControl}  value={LoginData.email}  onChange={HandleOnChange}    type="email" placeholder="email address" />
                </InputGroup>
              </FormControl>
                <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                   
                  />
                  <Input name="phone" className={styles.FormControl}  value={LoginData.phone}  onChange={HandleOnChange}    type="text" placeholder="Phone Number" />
                </InputGroup>
              </FormControl>

              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                
                  />
                  <Input
                    name="password" className={styles.FormControl}   value={LoginData.password}  onChange={HandleOnChange}
                    type={Password ? "text" : "password"}
                    placeholder="Password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" color={"white"} bg={"#000ff0"}  onClick={Handleclick}>
                      {Password ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
              color={"white"} bg={"#000ff0"} 
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="pink"
                width="full"
              >
                Sign Up
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
      Already a user?{" "}
        <Link color="blue" href="/gotologin">
         Login
        </Link>
      </Box>
    </Flex>
    </div>
  );
};
 
export default SignUp;