import React from 'react';
import './learn.css'; // Import custom CSS for styling

const EmergencyProvisionsArticle = () => {
  return (<div style={{height :"750px"}}>
    <div className="article mb-5 ">
      <h1>Emergency Provisions in the Indian Constitution</h1>
      <p className="lead">
        The Emergency Provisions in the Indian Constitution allow the central government to assume greater powers during times of crisis. These provisions enable the President of India to declare an emergency in the country, which could lead to the suspension of certain rights, the centralization of powers, and changes in the normal functioning of the state. Emergency Provisions are outlined in Part XVIII of the Indian Constitution (Articles 352 to 360).
      </p>

      <h2>Types of Emergencies</h2>
      <p className="lead">
        The Constitution of India provides for three types of emergencies:
      </p>

      <h3>1. National Emergency (Article 352)</h3>
      <p className="lead">
        A National Emergency can be declared if the security of India or any part of its territory is threatened by war, external aggression, or armed rebellion. During a National Emergency:
      </p>
      <ul className="lead">
        <li>
          The federal structure of the country transforms into a more centralized system, with the Union government gaining additional powers.
        </li>
        <li>
          Fundamental Rights, especially those guaranteed under Article 19, may be suspended.
        </li>
        <li>
          The Parliament can legislate on any subject, including those in the State List.
        </li>
        <li>
          The term of the Lok Sabha may be extended beyond five years during the emergency.
        </li>
      </ul>
      <p className="lead">
        The first National Emergency was declared in 1962 during the India-China war, followed by the 1971 India-Pakistan war, and the most controversial emergency from 1975 to 1977, which was imposed due to internal disturbances.
      </p>

      <h3>2. President's Rule (State Emergency) (Article 356)</h3>
      <p className="lead">
        The President's Rule, also known as State Emergency, can be imposed when a state government is unable to function according to constitutional provisions. This usually happens due to a failure of constitutional machinery in the state. In such cases:
      </p>
      <ul className="lead">
        <li>
          The President of India assumes all executive powers of the state government.
        </li>
        <li>
          The state's legislative assembly may be dissolved or suspended.
        </li>
        <li>
          The Parliament takes over the power to legislate on behalf of the state.
        </li>
      </ul>
      <p className="lead">
        This provision is often criticized for being misused to dismiss democratically elected governments. However, it remains a crucial tool for ensuring that the state governments function in accordance with constitutional norms.
      </p>

      <h3>3. Financial Emergency (Article 360)</h3>
      <p className="lead">
        A Financial Emergency can be declared if the financial stability or credit of India or any part of its territory is in jeopardy. This type of emergency has never been declared in India. If a Financial Emergency is proclaimed:
      </p>
      <ul className="lead">
        <li>
          The President can direct the reduction of salaries and allowances of all or any class of persons serving the state or the Union, including judges of the Supreme Court and High Courts.
        </li>
        <li>
          All money bills passed by the state legislatures can be reserved for the President's consideration.
        </li>
        <li>
          The government can issue directions to the states regarding the utilization of financial resources.
        </li>
      </ul>
      <p className="lead">
        Though never invoked, the provision for Financial Emergency exists to safeguard the country's financial health in times of severe economic crisis.
      </p>

      <h2>Impact of Emergency Provisions on Fundamental Rights</h2>
      <p className="lead">
        One of the most significant effects of declaring an emergency is the potential suspension of certain Fundamental Rights. During a National Emergency, the enforcement of rights under Article 19 can be suspended, and other Fundamental Rights may also be affected.
      </p>
      <p className="lead">
        The 44th Amendment of the Indian Constitution (1978) made significant changes to the Emergency Provisions, especially to ensure the protection of Fundamental Rights. For instance, Article 20 and Article 21, which guarantee protection in respect of conviction for offenses and the right to life and personal liberty, cannot be suspended even during an emergency.
      </p>

      <h2>Checks and Safeguards</h2>
      <p className="lead">
        After the misuse of Emergency Provisions during the 1975-1977 Emergency, the Constitution was amended to include several safeguards to prevent their future misuse:
      </p>
      <ul className="lead">
        <li>
          A National Emergency can only be proclaimed based on a written request from the Cabinet.
        </li>
        <li>
          The proclamation of an emergency must be approved by both houses of Parliament within one month.
        </li>
        <li>
          The emergency must be renewed by Parliament every six months.
        </li>
        <li>
          A proclamation of emergency can be revoked by the President at any time or by a resolution passed by the Lok Sabha.
        </li>
      </ul>

      <h2>Conclusion</h2>
      <p className="lead">
        Emergency Provisions are necessary tools for ensuring national security and governance stability in times of crisis. However, their potential for misuse calls for constant vigilance and adherence to constitutional principles. The safeguards added by the 44th Amendment are critical in maintaining a balance between state power and individual freedoms, ensuring that Emergency Provisions are used only in genuine situations of national importance.
      </p>
    </div></div>
  );
};

export default EmergencyProvisionsArticle;
