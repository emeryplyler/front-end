const content = `
    The 
    <h1>
        FitnessGram pacer test 
    </h1>
    is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin
`;

const main = document.querySelector("body");
const newContent = document.createElement("article");
newContent.innerHTML = content;

main.append(newContent);
