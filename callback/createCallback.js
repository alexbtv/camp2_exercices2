const log = (text) => console.log(text);

const getInput = (user, callback ) => {

const text = user.user;

callback(text);

};

getInput({user: "lorem", key: "arrow_up"}, log);
