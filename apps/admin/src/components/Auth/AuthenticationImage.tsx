// "use client";
// import {
//   Anchor,
//   Button,
//   Checkbox,
//   Paper,
//   PasswordInput,
//   Text,
//   TextInput,
//   Title,
// } from '@mantine/core';
// import classes from './AuthenticationImage.module.css';

// export default function AuthenticationImage() {
//   return (
//     <div className={classes.wrapper}>
//       <Paper className={classes.form} radius={0} p={30}>
//         <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
//           Welcome back to Mantine!
//         </Title>

//         <TextInput label="Email address" placeholder="hello@gmail.com" size="md" />
//         <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" />
//         <Checkbox label="Keep me logged in" mt="xl" size="md" />
//         <Button fullWidth mt="xl" size="md">
//           Login
//         </Button>

//         <Text ta="center" mt="md">
//           Don&apos;t have an account?{' '}
//           <Anchor<'a'> href="#" fw={700} onClick={(event) => event.preventDefault()}>
//             Register
//           </Anchor>
//         </Text>
//       </Paper>
//     </div>
//   );
// }
"use client";
import {
  Button,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import classes from './AuthenticationImage.module.css';
import { useState } from 'react';

interface AuthenticationImageProps {
  onLogin: (username: string, password: string) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

export default function AuthenticationImage({ onLogin, isLoading, error }: AuthenticationImageProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Login
        </Title>
        {error && <Text color="red">{error}</Text>}
        <TextInput
          label="Username"
          placeholder="Enter your username"
          size="md"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          mt="md"
          size="md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          fullWidth
          mt="xl"
          size="md"
          onClick={() => onLogin(username, password)}
          loading={isLoading}
        >
          Login
        </Button>

        <Text ta="center" mt="md">
          {/*Don't have an account?{' '}
          <Anchor href="#" fw={700} onClick={(event) => event.preventDefault()}>
            Register
          </Anchor>*/}
        </Text>
      </Paper>
    </div>
  );
}