import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

const data = [
  {
    title: "D.L.N. Murthy Rao Oration award",
    description: `D.L.N. Murthy Rao Oration award has been instituted in the memory of the late Dr. D.L.N. Murthy Rao, a senior fellow of the Society. This oration is delivered at each annual conference of the Indian Psychiatric Society.

RULES:

    The oration award is declared one year in advance at every annual conference of the society.
    Any Life Fellow of the Society can propose the name of any other Life Fellow of the society for the oration award. The proposal including the bio-data of the nominee must be submitted to the Chairperson, Awards Committee by a date determined by the Executive Council of IPS. The proposal must be accompanied by written consent of the nominee.
    To be eligible for the award, the nomination shall be assessed on the following criteria: (a) Contribution to the service and development of psychiatry in India- 30 marks 
    (b) Contribution to the Indian Psychiatric Society – 30 marks 
    (c) Contribution to teaching, training and research in Psychiatry – 20 marks 
    (d) Overall seniority in Psychiatry, recognition, and standing amongst fellow Psychiatrists in India- 20 marks
    A panel of judges shall rate the nominations. The nomination securing the highest total marks (out of 100) shall win the award, subject to ratification by the awards committee and the executive council of the society. In case of a tie, the concerned nominations shall be re-assessed by another panel of judges. To win an award not less than 50% of the full marks must be obtained by a nominee.
    The oration paper will become the property of the Indian Psychiatric Society and shall be published in the Indian Journal of Psychiatry with the necessary editorial corrections. The speaker will pass on the oration paper to the Editor, Indian Journal of Psychiatry as soon after the annual conference as possible for its publication in the journal.
    The speaker can choose any topic for the oration. He shall intimate the title of the oration to the chairperson awards committee at least three months prior to the conference.
    The speaker is paid a lump-sum for the oration and awarded a suitable scroll.
    No person shall win the award more than once.
`,
  },
  {
    title: "Tilak Venkoba Rao Oration Award ",
    description: `This oration award has been instituted out of an endowment received from Dr. A. Venkoba Rao, a Past-President of the society, in the memory of his son Mr. TilakVenkoba Rao. This oration should be on any aspect of mental health and will be delivered at each annual conference of the Indian Psychiatric Society.

RULES:

    The oration award is declared one year in advance at every annual conference of the society.
    Any Life Fellow of the society can propose the name of any other member of the society, who is not over 40 years of age on 30th September of the year in which he is submitting his entry. If that conference is not held in that year, the date of reckoning the age shall remain the same. The proposal and the bio-data of the nominee must be submitted to the Chairperson, Awards Committee. The proposal shall include the proposed titles and an outline of the oration and details of the nominee’s work in that topic which will also be taken into account in assessing the nomination. The proposal must be accompanied by written consent of the nominee and certificate of his age as recorded in the school leaving certificate or equivalent records.
    A panel of judges shall rate the nomination. The nomination securing the highest total marks (out of 100) shall win the award, subject to ratification by the awards committee and the nominations shall be reassessed by another panel of judges. To win an award not less than 50% of the full marks must be obtained by a nominee.
    The oration paper will become the property of the Indian Psychiatric Society and shall be published in the Indian Journal of Psychiatry with the necessary editorial corrections. The speaker will pass on the oration paper to the Editor, Indian Journal of Psychiatry, as soon after the annual conference as possible for its publication in the journal.
    The speaker is paid a lump sum for the oration and awarded a suitable scroll.
    The decision of the panel of judges as ratified by the awards committee and the executive council of the society shall be final and binding.
    If in the opinion of the panel of judges, no contestant for an oration award scores 50% or above, there will be no oration award for that year.
    No person shall win this award more than once.
`,
  },
  {
    title: "Marfatia Award",
    description: `The Marfatia Award has been instituted out of an endowment received from the late Dr. J.C. Marfatia, a Past President of the society, The award is given to a paper presented at the annual conference of the society.

 RULES:
 
     For the paper to be considered for the award, it shall be necessary for the author to submit the full paper to the Chairperson, Awards Committee, by a date to be determined by the Council of the IPS. For the sake of uniformity of style the paper shall be prepared in accordance with the “Instructions to contributors” published in the Indian Journal of Psychiatry. Abstract of the paper (not more than 200 words) shall be enclosed with the paper.
     To be eligible for the award the paper must fulfill each of the following criteria.
     (a) It must be a research paper based on work done in India. It must not have been published in a scientific journal or have been awarded any award of the IPS.
     (b) The principal author must be a Life Fellow of the Society and at least 50% of all authors must be members of the IPS at the time of the submission of the paper.
     60% marks will be for preparation and compilation of the manuscript and 40% marks will be for the presentation at the conference. A panel of 3 judges shall rate each paper, both for the written version and the presentation. To be eligible for presentation the manuscript must be assessed, to have scored more than 40% of the marks (i.e. 24 out of 60 or more). The best three papers only may be permitted to be presented at the conference due to constraints of time. This rule may be relaxed in unusual situation at the discretion of the Awards Committee with the approval of the Executive Council. The paper securing the highest total marks shall win the Award, provided it scores not less than 50% of the maximum marks. This is subject to adjudication and ratification by the awards committee and confirmation by the Executive Council of the IPS. In case of a tie the concerned papers will be declared joint winners.
     Authors of the award winning papers shall be considered to have won the award and will be issued certificates and will be eligible for the awards money. The money shall be handed over to the principal author for disbursement among the co-authors.
     Rules common to all IPS awards will also be applicable to this award.
 `,
  },
  {
    title: "Bhagwat Award",
    description: `The Bhagwat Award was instituted out of an endowment received from Dr. A.G. Bhagwat in the memory of his father Dr. G.A. Bhagwat, for the paper presented at the annual conference of the Society by a younger member. The paper must be presented by a member not over 35 years of age on 30th September of the year in which he is submitting his entry. If that conference is not held in that year, the date of reckoning the age shall remain the same.
None of the authors or co-authors will be over 35 years of age on the specified day mentioned above. The contestants must enclose with their papers, their certificates of age as recorded in the school leaving certificate or equivalent records.

RULES:

    For any paper to be considered for the award, it shall be necessary for the author to submit the full paper to the Chairperson, Awards sub-committee, by a date determined by the council of the IPS. For the sake of uniformity of style the paper shall be prepared in accordance with the “Instructions to contributors” published in the Indian Journal of Psychiatry. The abstract of the paper (not more than 200 words) shall be enclosed with the pape’r.
    To be eligible for the award, the paper must fulfill each of the following criteria.
    (a) It must be a research paper based on work done in India. It must not have been published in a scientific journal nor have been awarded any award of the IPS.
    (b) The principal author and at least 50% of all authors must be members of the IPS at the time of the submission of the paper.
    A panel of judges shall rate the papers. Out of the full marks i.e. 100, 60% will be for preparation and compilation of the paper and 40% for its presentation at the conference. The paper securing highest total marks (out of 100) shall win the award subject to ratification by the awards committee and the executive council of the society. In case of a tie, the concerned papers will be declared joint winners. To win an award not less than 50% of the full marks must be obtained by a paper. To be eligible for presentation, the written version of the paper must secure at least 40% of the full marks allotted for the written version i.e. 24 out of 60.
    All authors of the award winning paper shall be considered to have won the award and will be issued certificates and will be eligible for the award money. The money will be handed over to the principal author for distribution among the co-authors.
    None of the judges appointed for this award, shall be contestants for this award. However, a judge is eligible to contest for any other award.
    Rules common to all IPS awards will also be applicable to this award.
`,
  },
  {
    title: "Col. Kirpal Singh Award for Military / Industrial Psychiatry",
    description: `This award has been instituted out of an endowment received form Col. Kripal Singh, a Past President of the Society. This award is given to the best paper in military psychiatry and/or industrial psychiatry presented at the annual conference of the society.

RULES:

    For any paper to be considered for the award, it shall be necessary for the author to submit the full paper to the Chairperson, Awards Committee by a date determined by the council of the IPS. For the sake of uniformity of style the paper shall be prepared in accordance with the “Instructions to contributors” published in the Indian Journal of Psychiatry. The abstract of the paper (not more than 200 words) shall be enclosed with the paper.
    To be eligible for the award, the paper must fulfill each of the following criteria.
    (a) It must be a research paper based on work done in India. It must not have been published in a scientific journal nor have been awarded any award of the IPS.
    (b) The principal author and at least 50% of all authors must be members of the IPS at the time of the submission of the paper.
    The assessment of the manuscript and the presented version will be as per guidelines in rule (6) common to all awards of the IPS.
    All authors of the award winning paper shall be considered to have won the award and will be issued certificates and will be eligible for the award money. The money will be handed over to the principal author for disbursement among the co-authors.
    None of the judges appointed for this award, shall be contestants for this award. However, a judge is eligible to context for any other award.
`,
  },
  {
    title: "The Poona Psychiatrists Association Awards I & II",
    description: `These awards have been instituted out of an endowment received from the Poona Psychiatrists Association for the best published article based on original work in the field of psychiatry and constituting of the most outstanding contribution of the year by a member on any aspect of psychiatry. PPA-I is for the best paper published by any Life Fellow of the IPS. PPA-II is for the best paper published as a first author by a member of the iPS who must not have completed 40 years of age at the time of publication of the paper.

RULES:

    For a paper to be considered for the award, it shall be necessary for the author to submit the reprints of the papers to the Chairperson, Awards Committee by a date determined by the council of the IPS. The first author shall also intimate to the Chairperson, Awards Committee his membership status in the society. For the PPA-II the principal author must enclose with his paper the certificate of his age as recorded in the school leaving certificate or equivalent records.
    To be eligible for the award, the paper, in addition to clause mentioned above, the applicant must fulfill each of the following criteria:
    (a) It must be a research paper based on work done in India.
    (b) The principal author and at least 50% of all authors must be members of the IPS at the time of publication of the paper, but, for PPA I award the Principal author must be a Life Fellow of IPS.
    A panel of judges shall rate the papers. The papers securing the highest total marks (out of 100) shall win the award, subject to ratification by the award committee and the Executive Council of the Society. In case of a tie, the concerned papers shall be declared the joint winners. To win an award not less than 50% of the full marks must be obtained by a paper. The manuscripts will be assessed as per guidelines laid down under the following headings:
    (a) Topic, title, its relevance and methodology 20 marks
    b) Survey of literature, references, bibliography 20 marks
    (c) Presentation of results and discussion 20 marks
    (d) Conclusions and how far they are substantiated by the study 20 marks
    (e) Clarity, lucidity, precision of language and overall elegance of the paper 20 marks
    All the authors of the award winning paper, shall be considered to have won the award and shall be issued the certificate and awarded the award money. The money will be handed over to the principal author(s) for distribution among the co-authors.
    All papers received for the awards, fulfilling the above, mentioned criteria will be eligible for competing for that year’s awards.
    None of the authors or co-authors shall be eligible to judge either of the two PPA awards.
    All papers published in a professional journal or book during the preceding two years shall be eligible to contest for the awards. The year will be calculated as July of one year to June of the following year. For example, to compete for the award of 1988, the paper must have been published at any time between July 1985 and June 1987.`,
  },
  {
    title: "The Bombay Psychiatric Society Silver Jubilee Year Award",
    description: `This award has been instituted out of an endowment received from the Bombay Psychiatric Society to commemorate its Silver Jubilee Year, with a view to encourage research and stimulate presentation of research papers at the Zonal Conferences. The best paper presented at the scientific sessions of each zonal conference of the Indian Psychiatric Society of a particular year will be eligible to compete for this award at the annual conference of the Indian Psychiatry Society to be held immediately following the zonal conference. These papers will be presented in a special session to be called the Bombay Psychiatric Society silver jubilee award session.

 RULES:
 
     For any paper to be considered for the award, it shall be necessary for the author to of the full paper to the Chairperson, Awards Committee, by a date determined by the council of the IPS. For the sake of uniformity of style the paper shall be prepared in accordance with the “instruction to contributors” published in the Indian Journal of Psychiatry. Abstract of the paper (not more than 200 words) shall be enclosed with the paper.
     To be eligible for the award, the paper must fulfill each of the following criteria:
     (a) It must be a research paper based on work done in India; it must not have been published in a scientific journal nor have been awarded any award of IPS.
     (b) The principal author and at least 50% of all authors must be members of the Indian Psychiatric Society of the same zone at the time of the conference.
     It shall be necessary for the author to submit to the Chairperson, Awards Committee, a letter from the Zonal President or Secretary certifying that his/her paper was adjudged the best paper at the respective zonal conference. This letter must be enclosed with the copies of the full paper. .
     A panel of judges shall rate the papers. Out of the total marks i.e. 100%, 75% will be for preparation and compilation of paper and 25% for its presentation at conference. The paper securing the highest total marks (out of 100) shall win the award, subject to ratification by the award committee and the executive council of the society. In case of a tie the concerned papers will be declared the joint winners. To win an award not less than 50% of the full marks must be obtained by a paper. To be eligible for presentation, the written version of the paper must secure at least 40% of the full marks allotted for the written version (24 out of 60).
     All authors of the award winning paper shall be considered to have won the award and will be issued certificates and will be eligible fot the award money. The money will be handed over to the principal author for distribution among the co-authors
 `,
  },
  {
    title: "Dr. JKT Life time Achievement Award",
    description: `The award has been instituted in memory of Late Dr. J. K. Trivedi, a senior life fellow of the society who passed away untimely in September 2013. The oration will be delivered during each annual conference of I.P.S.

RULES:

    The oration award will be declared one year in advance at every annual conference of the society.
    Name of any member of the society who has been fellow of the society for more than 20 years and has done exemplary work in the field of academics, research, social service to the cause of promotion of mental health should be considered. The name can be proposed by any other fellow member of the society. The proposal including six copies of the bio-data of the nominee must be submitted to the chairperson, Awards Committee by a date determined by the Executive Council of IPS. The proposal must be accompanied by a written consent of the nominee.
    A panel of judges shall rate the nominations. The nomination securing the highest total marks (out of 100) shall win the award, subject to ratification by the awards committee and the executive council of the society. In case of a tie, the concerned nominations shall be re-assessed by another panel of judges. To win an award not less than 50% of the full marks must be obtained by a nominee. .
    The oration paper will become the property of the Indian Psychiatric Society and shall be published in the Indian Journal of psychiatry with the necessary editorial corrections. The speaker will pass on the oration paper to the Editor, Indian Journal of Psychiatry as soon as after the annual conference as possible for its publication in the journal.
    The speaker can choose any topic for the oration. He shall intimate the title of the oration to the chairperson awards committee at least three months prior to the conference.
    The speaker will be paid a lump-sum for the oration. He will also be awarded a suitable scroll.
    No person shall win the award more than once.
`,
  },
  {
    title: "Professor K.C. Dube Poster Session I award",
    description: `This award has been instituted out of an endowment received from the family of Prof. K. C. Dube for the best Poster Paper Presentation based on the original work done in India in the field of psychiatry by a member on any aspect of psychiatry.

RULES:

    For a Poster paper to be considered for the award, it shall be necessary for the principal author to submit the abstract [maximum 300 words] of the poster paper to the Chairperson, Awards Committee by a date determined by the council of the IPS. The abstract should be structured and contain the aims/objectives, methodology, results, discussion and conclusion.
    The principal author shall also intimate to the Chairperson, Awards Committee his membership status in the society and membership numbers of all authors.
    The principal author and at least 50% of all authors must be members of the IPS at the time of submission of the poster paper. For the purpose of this award member means Life Fellow or Life ordinary member only.
    A panel of judges shall rate the poster papers at the time of the conference. The papers securing the highest total marks (out of 100) shall win the award, subject to ratification by the award committee. In case of a tie, the concerned papers shall be declared the joint winners. To win an award not less than 50% of the full marks must be obtained by a paper.
    The manuscripts will be assessed as per guidelines laid down under the following headings
    a) Topic, title, its relevance and methodology 20 marks
    b) Survey of literature, references, bibliography 20 marks
    c) Presentation of results and discussion 20 marks
    d) Conclusions and how far they are substantiated by the study 20 marks
    e) Clarity, lucidity, precision of language and overall elegance of the paper 20 marks
    All the authors of the award winning paper, shall be considered to have won the award and shall be issued the certificate and awarded the award money. The money will be handed over to the principal author(s) for distribution among the co-authors.
    All papers received for the award fulfilling the above mentioned criteria will be eligible for competing for that year’s award. However, a paper or substantially the same paper cannot be submitted to other awards of that year, and if found to be so the member will be debarred to contest for any of the awards of that year. Also, the paper or substantially the same paper should not have won any of the IPS awards during any of the previous years. The paper should not have been published in any of the journals. No more than two papers where a particular member appears as an author or co-author shall be submitted for this award in a year.
    A Submissions without above information or structured abstract will not be considered for the award.
    None of the authors or co-authors shall be eligible to be a judge for this award.
    The Organizing Secretary of the conference shall keep the Principal author informed about the date, time, place and modalities of the poster presentation.
`,
  },
  {
    title: "Professor M. Murugappan Poster Session II award",
    description: `This award has been instituted out of an endowment received from the family of Prof. M. Murugappan for the best Poster Paper Presentation based on the original work done in India in the field of psychiatry by a member (Principal author) during his/her first three years of Post Graduate study (DPM, MD,DNB, DM) on any aspect of psychiatry. The Paper must be submitted within a period of three years from the date of completion of the said Postgraduate study.

RULES:

    For a Poster paper to be considered for the award, it shall be necessary for the principal author to submit the abstract [maximum 300 words] poster paper to the Chairperson, Awards Committee by a date determined by the council of the IPS.
    The abstract should be structured and contain the aims/objectives, methodology, results, discussion and conclusion.
    The principal author shall also intimate to the Chairperson, Awards Committee his membership status in the society and membership numbers of all authors. He/She shall enclose with his/her paper the copy of the certificate from the concerned Head of the department, present or past, mentioning the period of PG course under him/her, place and period of study.
    The principal author and at least 50% of all authors must be members of the IPS at the time of submission of the poster paper. For the purpose of this award member means Life Fellow or Life ordinary member only.
    A panel of judges shall rate the poster papers at the time of the conference. The papers securing the highest total marks (out of 100) shall win the award, subject to ratification by the award committee. In case of a tie, the concerned papers shall be declared the joint winners. To win an award not less than 50% of the full marks must be obtained by a paper. The posters will be assessed as per a) guidelines laid down under the following headings :
    b) Topic, title, its relevance and methodology 20 marks
    c) Survey of literature, references, bibliography 20 marks
    d) Presentation of results and discussion 20 marks
    e) Conclusions and how far they are substantiated by the study 20 marks
    Clarity, lucidity, precision of language and overall elegance of the paper 20 marks
    All the authors of the award winning poster, shall be considered to have won the award and shall be issued the certificate and awarded the award money. The money will be handed over to the principal author(s) for distribution among the co-authors.
    All papers received for the award fulfilling the above mentioned criteria will be eligible for competing for that year’s award. However, a paper or substantially the same paper can not be submitted to other awards of that year, and if found to be so the member will be debarred to contest for any of the awards of that year. Also, the paper or substantially the same paper should not have won any of the IPS awards during any of the previous years. The paper should not have been published in any of the journals. No more than two papers where a particular member appears as an author or co-author shall be submitted for this award in a year.
    Submissions without above documents and information or structured abstract will not be considered for the award.
    None of the authors or co-authors shall be eligible to be a judge for this award.
    The Organizing Secretary of the conference shall keep the Principal author informed about the date, time, place and modalities of the poster presentation.
`,
  },
  {
    title: "Indian Psychiatric Society Young Psychiatrists Award",
    description: `Eligibility Criteria:

Must be a member of IPS at the time of applying for the award.
Must be working in India at the time of applying and making the scientific presentation for the award.
Must be less than 35 years of age by the last date of submitting the application.
A candidate can win this award only once in lifetime.

Requirements:

The applicant will be required to submit the curriculum vitae outlining the following information:
    Qualifications, Present position and affiliations
    Additional qualifications, if any
    Publications in indexed and non indexed journals to be indicated separately with full citation (do not include publications which are published only as abstracts)
    Books and book chapters
    Details of conferences attended
    Presentations in National and International Conferences
    Awards received from scientific societies, academic institutes etc
    Other research activities
Contribution to service and development of psychiatry in India
Contribution to Indian Psychiatric Society
Any other achievements
A structured abstract, not exceeding 250 words of a scientific presentation based on the original research carried out by the candidate How will the award be adjudicated? A panel of 3 judges will shortlist 3-5 candidates on the basis of information provided by the candidates. The short listed candidates will be required to make their presentation based on the submitted `,
  },
];
const Award = () => {
  const [activeId, setActiveId] = useState(null);

  const togglerFunction = (index) => {
    if (activeId === index) {
      setActiveId(null);
    } else {
      setActiveId(index);
    }
  };

  return (
    <div>
      <section className="bg-[url('https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/9-background.jpg')]  w-full h-[350px] bg-cover">
        <div className=" flex flex-col justify-center items-center gap-5  t ">
          <img
            src="https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/trophy.svg"
            alt=""
            className=" w-[70px] h-[70px] mt-20"
          />
          <h1 className=" text-gray-700 text-3xl">Awards</h1>
          <div className=" flex flex-col gap-3">
            <div className=" bg-gray-400 h-[4px] w-[70px] flex mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      <section>
        <div className="py-20 flex justify-center">
          <div className="w-full lg:w-2/3 h-max flex flex-col gap-10 overflow-hidden">
            {data.map((item, i) => (
              <div key={i} className="border-2 ">
                <div
                  className={`px-5 py-4 flex items-center justify-between ${
                    activeId === i ? "bg-white" : "bg-gray-100"
                  }`}
                  onClick={() => togglerFunction(i)}
                >
                  <p className="flex-1">{item.title}</p>
                  <span>
                    {activeId === i ? (
                      <IoIosArrowUp />
                    ) : (
                      <MdKeyboardArrowDown />
                    )}
                  </span>
                </div>
                {activeId === i && (
                  <div className="px-5 py-4 flex items-center justify-between">
                    <p>{item.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Award;
