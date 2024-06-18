'use client';

import React, { useState } from 'react';
import Button from './button';
import dynamic from 'next/dynamic';
// import CompanyFormModal from './company-from-modal';

const CompanyFormModal = dynamic(() => import('./company-from-modal'), {
  ssr: false,
});

export default function AddCompanyButton() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>Add company</Button>
      <CompanyFormModal
        onSubmit={console.log}
        show={show}
        onClose={() => setShow(false)}
      />
    </>
  );
}
