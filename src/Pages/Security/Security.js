import React from 'react';
import ProtectYou from '../../Components/Security_C/ProtectYou';
import CustomLanding from '../../Components/Shared_C/CustomLanding/CustomLanding';
import { APP_NAME } from '../../Utils/constants';
import Faq from '../../Components/Shared_C/FAQ/Faq';

function Security() {
  return (
    <div className='security-page pt-24'>
      {/* Custom Landing */}
      <CustomLanding
        textBoxData={{
          titleStart: "Your Security is Our",
          featuredWords: "Top Priority",
          description: `At ${APP_NAME}, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority.`
        }}
        heroImage={`${process.env.PUBLIC_URL}/assets/security/landingHero.png`}
      />
      {/* Protect You */}
      <ProtectYou />
      {/* FAQ */}
      <Faq />
    </div>
  )
}

export default Security;