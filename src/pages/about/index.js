import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  width: clamp(350px, 60vw, 1440px);
  margin: 0 auto;
  padding: 0 1rem;
  h1 {
    color: #f2e9e4;
    font-size: 3rem;
    text-align: center;
    margin-top: 0;
  }
  p {
    color: #f2e9e4;
    font-size: 1rem;
  }
`;

export default function About() {
  return (
    <Container>
      <h1>About This Blog</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel
        diam hendrerit, dictum sapien non, aliquam elit. Morbi hendrerit, velit
        vestibulum pharetra facilisis, ex sem hendrerit augue, eget condimentum
        purus odio sed orci. Morbi ac luctus diam. Fusce et sodales mi. Fusce
        malesuada fermentum elit, in elementum leo ultrices nec. Duis non felis
        ut elit aliquet laoreet ut quis augue. Etiam imperdiet sem sed ante
        tincidunt, quis gravida eros condimentum. Praesent tempus turpis non
        nisi placerat imperdiet. Sed efficitur mollis metus ac consequat.
        Aliquam erat volutpat. Proin blandit, quam id ultrices varius, lorem
        arcu convallis lacus, in euismod massa eros ut neque. Fusce vitae eros
        congue, convallis eros ut, tempus ante.
      </p>
    </Container>
  );
}
