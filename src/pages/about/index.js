import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  width: clamp(350px, 60vw, 1440px);
  margin: 0 auto;
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
        congue, convallis eros ut, tempus ante. Donec ullamcorper dignissim
        bibendum. Integer eleifend quis metus vel suscipit. Pellentesque vel mi
        ut nunc sagittis dapibus. Donec metus diam, ultrices volutpat mi nec,
        cursus faucibus ligula. Nulla convallis dictum est. Duis ut nisi
        placerat, ultricies nunc nec, lobortis arcu. Ut sollicitudin sem at nibh
        pretium, eget condimentum augue fermentum. Etiam eget ipsum bibendum,
        cursus velit sit amet, egestas dui. Integer massa urna, pharetra sit
        amet nunc consectetur, pulvinar finibus dui. Aenean euismod, leo
        elementum vehicula molestie, leo dolor vehicula quam, non interdum enim
        nunc id enim. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Sed tempus non odio at eleifend.
      </p>
    </Container>
  );
}
