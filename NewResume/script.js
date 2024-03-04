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
    const  techSkill = document.querySelector(".techSkill");
    skill.forEach((s)=>{
        techSkill.innerHTML += `
        <p>${s.name}</p>
        <div class="progress" style="height: 5px;">
            <div class="progress-bar" role="progressbar" style="width: ${s.score}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
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

function setImg(imag){
    const img = document.querySelector(".myimg");
    img.innerHTML += `
        <img src=${imag.src} alt=${imag.alt}>
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
