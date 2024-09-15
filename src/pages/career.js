import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Career = () => (
  <Layout>
    <Seo title="Career Opportunities at CLC | Apply for Trainer Positions" />
    <div className="career-page">
      <h1>Career Opportunities at CLC</h1>
      <p>
        Are you passionate about teaching and looking to make an impact? CLC is
        seeking highly qualified and experienced trainers to join our dynamic
        team. We offer opportunities in Spoken English, IELTS, OET, and PTE
        coaching. If you're driven to help students succeed and want to grow
        with a leading educational institute, we encourage you to apply.
      </p>

      <h2>Available Positions:</h2>
      <ul>
        <li>Spoken English Trainers</li>
        <li>IELTS Trainers</li>
        <li>OET Trainers</li>
        <li>PTE Trainers</li>
      </ul>

      <h2>Why Join CLC?</h2>
      <ul>
        <li>
          <strong>Growth Opportunities:</strong> CLC fosters an environment of
          continuous learning and career advancement.
        </li>
        <li>
          <strong>Competitive Pay & Perks:</strong> Pay and benefits are
          negotiable for the right candidates, with plenty of room for growth.
        </li>
        <li>
          <strong>Innovative Teaching Environment:</strong> Work with a
          well-equipped institution that utilizes modern tools and methodologies
          for effective learning.
        </li>
        <li>
          <strong>Open to Freshers:</strong> Freshers with a passion for
          teaching and a willingness to grow with CLC are also welcome to apply.
        </li>
      </ul>

      <h2>How to Apply</h2>
      <p>
        If you're interested in joining our team and shaping the future of
        learners, please forward your CV to{" "}
        <a href="mailto:clcalicut@gmail.com">clcalicut@gmail.com</a>.
      </p>

      <p>
        At CLC, we value passion, dedication, and the drive to help students
        achieve their goals. If this sounds like you, we’d love to hear from
        you.
      </p>
    </div>
  </Layout>
);

export default Career;
