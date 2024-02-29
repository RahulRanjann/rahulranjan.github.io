function setEducation(education) {
    const eduList = document.querySelector(".education");
    education.forEach((edu)=>{
        eduList.innerHTML += `
            <div class="institute">
            <div class="instituteHead">
                <div class="instituteName">
                    <p class="">
                        ${edu.name}
                    </p>
                </div>
                <div class="date">
                    <p>
                    ${edu.duration}
                    </p>
                </div>
            </div>
            <div class="instituteLocation">
                <p class="location">${edu.address}</p>
            </div>
            <div class="role">
                <p>
                    <ul>
                        <li>${edu.std}</li>
                    </ul>
                </p>
            </div>
        </div>
        `
    });
}

function setInternship(internship){
    const  Internship = document.querySelector(".company");
    internship.forEach((i)=>{
        Internship.innerHTML += `
        <div class="companyHead">
            <div class="companyName">
                <p class="">
                    ${i.name}
                </p>
            </div>
            <div class="date">
                <p>
                    ${i.duration}
                </p>
            </div>
        </div>
        <div class="workFrom">
            <p class="companyLocation">${i.address}</p>
            <div class="workLocation">
                <p>${i.workMode}</p>
            </div>
        </div>
        <div class="role">
                <ul>
                    ${i.desc.map(d => `<li>${d}</li>`).join('')}
                </ul>
        </div>
    
        `
    })

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
    setInternship(profileData.internship);
    setSkill(profileData.skill);
    setName(profileData.name);
    setSubTitle(profileData.subtitle);
    setImg(profileData.imag);
    
})();