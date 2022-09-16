import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import Loading from './Loading';

export  const openModal = (url) => {
  const Modal = lazy(() => import('./modalImage'));
  const modalDiv = document.createElement('div');
  modalDiv.id = 'modal';
  document.body.appendChild(modalDiv);

  const root = createRoot(modalDiv);
  root.render(
    <Suspense fallback={<Loading />}>
      <Modal root={root} url={url} />
    </Suspense>
  );
};

