import userContext from "./usercontext";


const UserState = (props) => {
const userDetail = {
 name:"Aahmed",
 contact:"9234234432",
 country:"Pakistan",

};

return(
<>
<UserContext.Provider value=(userDetail)>
(props.children)
</UserContext.Provider>

</>

  );
};

export default UserState;