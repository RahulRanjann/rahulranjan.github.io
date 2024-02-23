function setEducation(education) {
    const eduList = document.querySelector(".educationList");
    education.forEach((edu)=>{
        eduList.innerHTML += `
            <li >
                <div class="collage">
                    <div >
                        <h4>${edu.name}</h4>
                        <ul>
                            <h5>${edu.board}</h5>
                            <h5>${edu.std}</h5>
                        </ul>
                    </div>
                    <div >
                        <div class="date">${edu.duration}</div>
                    </div>
                </div>
            </li>
        `
    });
}

function setSkill(skill){
    const  techSkill = document.querySelector(".SkillList");
    skill.forEach((s)=>{
        techSkill.innerHTML += `
        <li>${s.name}</li>
        `
    })
}

function setName(name){
    const myname = document.querySelector(".name");
    myname.innerHTML += `
        <h1>${name}</h1>
    `
}

function setSubTitle(subtitle){
    const sub = document.querySelector(".subtitle");
    sub.innerHTML += `
        <h3>${subtitle}</h3>
    `
}

function setImg(img){
    const myimg = document.querySelector(".imgbox");
    myimg.innerHTML += `
        <img src="${img.src}"
        alt="${img.alt}">
    `
}

(()=>{
    setEducation(profileData.education);
    setSkill(profileData.skill);
    setName(profileData.name);
    setSubTitle(profileData.subtitle);
    setImg(profileData.imag);
})();