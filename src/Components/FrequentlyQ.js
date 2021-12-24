import React from "react";
import "./FrequentQ.css";

function FrequentlyQ() {
  return (
    <div className="question-container">
      <h2 className="questionTitle"> Frequently Asked Questions</h2>
      <div className="onequestion">
        <div className="question-itself">
          <p>
            <i class="fas fa-plus"></i> What is Web Hosting?
          </p>
        </div>
        <div className="question-answer">
          <p>
            Web hosting allows businesses, organizations, and individuals to
            make their websites or apps visible on the internet. Whether they're
            using a dedicated server, or sharing resources, every website is
            hosted on a server. The only way for a website to be visible on the
            internet is if it's hosted by a web hosting service provider, also
            known as a web host. In order to find a website, you type the domain
            name (or URL) into your browser. Your computer will then connect to
            the server where the website is hosted, and the webpage is delivered
            onto your screen.
          </p>
        </div>
      </div>
      <div className="onequestion">
        <div className="question-itself">
          <p>
            {" "}
            <i class="fas fa-plus"></i> How Do I Buy Domain Name?
          </p>
        </div>
        <div className="question-answer">
          <p>
            Buying a domain name with DreamHost is simple and comes with
            features that a lot of other hosts don't offer. Use our domain
            search tool to buy your desired domain name; we'll let you know if
            someone else has already purchased it, and will serve up alternative
            versions that are available.
          </p>
        </div>
      </div>
      <div className="onequestion">
        <div className="question-itself">
          <p>
            <i class="fas fa-plus"></i> How Do I Migrate Over to the Host?
          </p>
        </div>
        <div className="question-answer">
          <p>
            If you want to move your web hosting to DreamHost, the first step is
            to create a DreamHost account – you can do that from any of our
            product pages (Shared Hosting, VPS, Dedicated,DreamPress) During the
            signup process, select the option to add your current domain to your
            new account – don't worry, this does NOT affect your current live
            website!
          </p>
        </div>
      </div>
      <div className="onequestion">
        <div className="question-itself">
          <p>
            <i class="fas fa-plus"></i> Can You Help Me Understand More About
            WordPress?
          </p>
        </div>
        <div className="question-answer">
          <p>
            Definitely. We have some awesome WordPress guide that can help
            answer most of your questions. If you get stuck, we are always here
            to help as well.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FrequentlyQ;
