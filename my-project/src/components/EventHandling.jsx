export const EventHandling = () => {
    // function handleButtonClick(){
    //     alert("hey i m onclick Event");
    // }

    const handleButtonClick =(event) =>{
        console.log(event);
        console.log(event.target);
        console.log(event.type);
        alert("Hey i m onclick event");
    };

    const handleWelcomeUser = (user) => {
        console.log(`Hey ${user}, Welcome`);
    };

    return (
        <>
         <button onClick={handleButtonClick}> Click me </button>

         <button onClick={() => handleWelcomeUser("pallavi")}>click me</button>
        </>
    );
};