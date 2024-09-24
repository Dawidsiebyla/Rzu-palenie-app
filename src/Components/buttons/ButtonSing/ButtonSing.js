import React from 'react'

import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function ButtonSing() {
    return (
        <ButtonGroup>

  
        <DropdownButton as={ButtonGroup} title="Profil" id="bg-nested-dropdown">
          <Dropdown.Item eventKey="1">Profil</Dropdown.Item>
          <Dropdown.Item eventKey="2">Sing In</Dropdown.Item>
          <Dropdown.Item eventKey="2">Sing Up</Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>
    )
}

export default ButtonSing
