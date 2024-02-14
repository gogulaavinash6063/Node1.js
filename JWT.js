var express=require("express")
var jwt=require("jsonwebtoken")
var app=express()
const secretKey = 'avinash';
const user = [
    {id: 1},
    {username: 'sampleUser'},
    {dob: '1990-01-01'}
];
  function generateToken(user) {
    const token = jwt.sign({ id: user.id, username: user.username, dob: user.dob }, secretKey, { expiresIn: '1m' });
    return token;
  }
  app.get('/', (req, res) => {
    
    res.send(generateToken(user));
});
app.listen(3000, () => {
    console.log("Server is running");
});






















//function verifyToken(token) {
    //     if(token) {
    //       const decoded = jwt.verify(token, secretKey);
    //       return decoded;
    //     } else {
    //       return null; // Token verification failed
    //     }
    //   }
    //   const generatedToken = generateToken(user);
    // console.log('Generated Token:', generatedToken);
    
    // const decodedUser = verifyToken(generatedToken);
    
    // if (decodedUser) {
    //   console.log('Decoded User:', decodedUser);
    // } else {
    //   console.log('Token verification failed.');
    // }