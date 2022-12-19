import { useState, useEffect } from "react";
import { Link , useNavigate } from "react-router-dom"
 import styles from "./Auth.module.css"
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
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
 
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
 
const LoginCheck = {
    email: "",
    password: ""
}
 
 
const LoginFunction = () => {
  const [Password, setPassword] = useState(false);
  const HandleClick = () => setPassword(!Password);
 
  const [ GetData , setGetData] = useState(LoginCheck);
  const [ VerifyLoginData , setVerifyLoginData] = useState([])
 
 const Navigate = useNavigate()
 
 useEffect(()=>{
    CheckLoginDetails();
 },[])
 
 
 
   const handleMyInput = (e)=>{
    setGetData({...GetData,[e.target.name]:e.target.value})
   }
 
   const hangleSubmitlogin = (e)=>{
       e.preventDefault();
 
       var flag = false;
 
       VerifyLoginData.filter((el)=>{
         if(el.email === GetData.email  &&  el.password === GetData.password){
            flag = true;
         }
       
       })
 
       if(flag){
        console.log("done")
         return  Navigate("/")
       }
       else{
        setGetData(LoginCheck)
        alert ("Wrong Credentials")
       }
 
       console.log(GetData);
       
   }
 
 
  const CheckLoginDetails = async()=>{
    try{
        let res = await fetch(`http://localhost:3000/LogIn`);
          let data = await res.json();
          console.log("Fetch Login Data" , data);
          setVerifyLoginData(data)  
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
      height="80vh"
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
        <Box minW={{ base: "90%", md: "550px" }}>
          <form   onSubmit={hangleSubmitlogin}  >
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
                  <Input className={styles.FormControl} name="email"  value={GetData.email}  onChange={handleMyInput}    type="email" placeholder="email address" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                   
                  />
                  <Input
                    name="password" className={styles.FormControl}  value={GetData.password}  onChange={handleMyInput}
                    type={Password ? "text" : "password"}
                    placeholder="Password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" color={"white"} bg={"#000ff0"} onClick={HandleClick}>
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
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
    </div>
  );
};
 
export default LoginFunction;
