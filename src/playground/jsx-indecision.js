console.log("app.js is running");


const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

// const template = (
//     <div>  
//         <h1>{app.title}</h1>
//         {app.subtitle && <p>{app.subtitle}</p>}
//         {app.options.length > 0 ? <p>Here are your options: {app.options + " "}</p> : 'No options'}
//         <p>{app.options.length}</p>
//         <button onClick={removeEverything}>Remove All</button>
//         <ol>
//             <li>{app.options[0]}</li>
//             <li>{app.options[1]}</li>
//         </ol>
//         <form onSubmit={onFormSubmit}>
//             <input type="text" name="option"/>
//             <button>Add Option</button>
//         </form>
//     </div>
// );


// ReactDOM.render(template, appRoot);

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        rerenderIndecisionApp();
    }
};

const removeEverything = () => {
    app.options = [];
    rerenderIndecisionApp();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');


const rerenderIndecisionApp = () => {
    const template = (
        <div>  
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length > 0 ? <p>Here are your options: </p> : 'No options'}
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeEverything}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};
rerenderIndecisionApp();


// const user = {
//     name: 'Zoltan',
//     age: 26,
//     location: 'Aalborg'
// };
// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>;
//     } 
// }
// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymus'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );


