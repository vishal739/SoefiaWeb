import React from 'react';

export default function Compliance() {
  return (
    <div className="bg-bg text-white lg:pt-[8%] pt-[30%] px-[5%] min-h-screen">
      <div className="mx-auto space-y-6 text-2xl">
        <h1 className="text-5xl font-semibold text-center pb-2">Compliance</h1>

        <p>
          We, <strong>Soefia Education Inc.</strong>, take our compliance obligations seriously and will always work as hard as we can to secure your data.
        </p>

        <p>We adhere to all applicable federal and state regulations, including:</p>

        <ul className="list-disc list-inside space-y-2">
          <li><strong>Family Educational Rights and Privacy Act Regulations (FERPA)</strong></li>
          <li><strong>European General Data Protection Regulation (GDPR)</strong></li>
          <li><strong>Children’s Online Privacy Protection Rule (COPPA)</strong></li>
        </ul>

        <p>
          Please contact us with any questions regarding our compliance policies and procedures at{' '}
          <a href="mailto:askus@soefia.com" className="text-blue-500 hover:underline">askus@soefia.com</a>.
        </p>
      </div>
    </div>
  );
}
