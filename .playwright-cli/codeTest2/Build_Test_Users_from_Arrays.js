function buildTestUsers(names, roles) {
    return names.map((name, index) => {
        const username = name.replace(/\s+/g, '_').toLowerCase();
        const email = `${username}@playwrightbatch.com`;
        return {
            username: username,
            email: email,
            role: roles[index]
        };
    });
}


const names = ["Amit Kumar", "Neha Singh"];
const roles = ["admin", "viewer"];
console.log(buildTestUsers(names, roles));