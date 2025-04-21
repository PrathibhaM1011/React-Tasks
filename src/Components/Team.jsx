import SocialMedia from "./SocialMedia";

const Team = () =>{
    return <div className='TeamDetails'>
    <div className='EachTeamMate'>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaD47eTJXzFCeE0bLWaYyhNjrgJ1ApxiuJhQ&s'/>
    <h1 className='Name'> Chiranjeevi</h1>
    <h3 className='Designation'>CEO</h3>
    <SocialMedia/>
    </div>

    <div className='EachTeamMate'>
    <img src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Nani_at_an_interview_for_film_companion_%28cropped%29.png'/>
    <h1 className='Name'> Nani</h1>
    <h3 className='Designation'>Founder</h3>
    <SocialMedia/>
    </div>

    <div className='EachTeamMate'>
    <img src='https://www.bizasialive.com/wp-content/uploads/2019/09/Varun-Dhawan-2-1100x.jpeg'/>
    <h1 className='Name'> Varun</h1>
    <h3 className='Designation'>Manager</h3>
    <SocialMedia/>
    </div>

    <div className='EachTeamMate'>
    <img src='https://www.sakshi.com/styles/webp/s3/article_images/2022/07/16/Aadi-Pinishetty.jpg.webp?itok=PfpRytFo'/>
    <h1 className='Name'> Aadhi</h1>
    <h3 className='Designation'>Manager</h3>
    <SocialMedia/>
    </div>

</div>
}

export default Team;