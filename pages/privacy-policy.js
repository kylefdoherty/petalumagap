import React, { Component } from 'react'
import {
  Content,
} from 'bloomer'

import MainLayout from '../layouts/main'
import SectionTitle from '../components/section-title'

class PrivacyPolicy extends Component {
  render() {
    const subTitleStyles = {
      color: 'white',
      padding: '0 10px 0 10px',
    }

    return (
      <MainLayout>
        <SectionTitle title="Privacy Policy" />
        <Content style={{ width: '80%', margin: 'auto', paddingBottom: '5em' }}>
          <h3>SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?</h3>
          <p>When you browse our site, we also automatically receive your computer’s internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.</p>
          <p>Email marketing: With your permission, we may send you emails about our site, new products and other updates.</p>

          <h3>SECTION 2 - CONSENT</h3>
          <h4>How do you get my consent?</h4>
          <p>If we ask for your personal information for some reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.</p>

          <h4>How do I withdraw my consent?</h4>
          <p>If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at anytime, by contacting us at hello@petalumagap.wine</p>

          <h3>SECTION 3 - DISCLOSURE</h3>
          <p>We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.</p>


          <h3>SECTION 4 - THIRD-PARTY SERVICES</h3>
          <p>
            In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us.
          </p>
          <p>
            However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions.
          </p>

          <p>
            For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers.
          </p>
          <p>
            In particular, remember that certain providers may be located in or have facilities that are located in a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.
          </p>
          <p>
            As an example, if you are located in Canada and your transaction is processed by a payment gateway located in the United States, then your personal information used in completing that transaction may be subject to disclosure under United States legislation, including the Patriot Act.
          </p>
          <p>
            Once you leave our website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website’s Terms of Service.
          </p>

          <h4>Links</h4>
          <p>
            When you click on links on our site, they may direct you away from our site. We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements.
          </p>

          <h3>SECTION 6 - SECURITY</h3>
          <p>
            To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.
          </p>

          <p>
            If you provide us with your credit card information, the information is encrypted using secure socket layer technology (SSL) and sited with a AES-256 encryption.  Although no method of transmission over the Internet or electronic storage is 100% secure, we follow all PCI-DSS requirements and implement additional generally accepted industry standards.
          </p>

          <h3>SECTION 7 - AGE OF CONSENT</h3>

          <p>By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.</p>

          <h3>SECTION 8 - CHANGES TO THIS PRIVACY POLICY</h3>

          <p>
            We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.
          </p>

          <p>
            If our site is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.
          </p>

          <h4>QUESTIONS AND CONTACT INFORMATION</h4>

          <p>
            If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information contact our Privacy Compliance Officer at hello@petalumagap.wine
          </p>
        </Content>
      </MainLayout>
    )
  }
}

export default PrivacyPolicy
