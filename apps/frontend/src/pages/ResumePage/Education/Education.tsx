import "./Education.css";

const Education = () => {
  return (
    <>
      <div className="EducationSection">
        <div className="EducationSectionHeader">
          <span>Self learning</span>
          <span>Sep 2022 - Now</span>
        </div>
        <div className="EducationSectionContent">
          <span>DESCRIPTION: Self learning ...</span>
          <span>Links</span>
        </div>
      </div>
      <div className="EducationSection">
        <div className="EducationSectionHeader">
          <span>Shool 19</span>
          <span>July 2021 - Sep 2022</span>
        </div>
        <div className="EducationSectionContent">
          <span>
            Deep dive into software development; the school 19 (42 network)
            offers an original way of teaching in the form of projects
            implementation and peer to peer evaluation
          </span>
          <span>Links</span>
        </div>
      </div>
      <div className="EducationSection">
        <div className="EducationSectionHeader">
          <span>ULB</span>
          <span>Sep 2015 - June 2021</span>
        </div>
        <div className="EducationSectionContent">
          <span>
            Master’s degree in neuropsychology; Courses in neuropsychology,
            neurology and research in this field (neuropsychology of aging, of
            language, statistics, …)
          </span>
          <span>No Link :(</span>
        </div>
      </div>
    </>
  );
};

export default Education;
