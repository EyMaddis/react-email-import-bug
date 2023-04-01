import { Button } from '@react-email/button';
import { Html } from '@react-email/html';
import * as React from 'react';

// THIS DOES NOT LOAD IN PREVIEW MODE
import { someValue } from '../someFile';

export default function Email() {
  return (
    <Html>
      <Button
        pX={20}
        pY={12}
        href="https://example.com"
        style={{ background: '#000', color: '#fff' }}
      >
        {someValue}
      </Button>
    </Html>
  );
}