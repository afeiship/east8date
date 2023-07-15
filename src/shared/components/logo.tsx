import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  border-bottom: 1px dashed #fff;

  > figure {
    &[data-collapsed='true'] {
      width: 40px;
    }

    &[data-collapsed='false'] {
      width: 120px;
    }
  }
`;

export const Logo = () => {
  const { collapsed } = nx.$use('layout');

  return (
    <Container className="logo flex justify-center py-3">
      <figure
        data-collapsed={collapsed}
        className={`wrapper h-[40px] overflow-hidden transition-all`}>
        <Link to="/admin">
          <img
            alt=""
            referrerPolicy="no-referrer"
            src="https://upload-images.jianshu.io/upload_images/2110669-4ba2f41436f9b999.png"
            width={120}
          />
        </Link>
      </figure>
    </Container>
  );
};
