// import { NextRequest, NextResponse } from 'next/server';
// import jwt from 'jose';

// export async function POST(req: NextRequest) {
//   try {
//     const { username, password } = await req.json();
//     console.log('Received username:', username);
//     console.log('Received password:', password);

//     const adminUsername = process.env.ADMIN_USERNAME;
//     const adminPassword = process.env.ADMIN_PASSWORD;
//     console.log('adminUsername:', adminUsername);
//     console.log('adminPassword:', adminPassword);


//     if (!adminUsername || !adminPassword || username !== adminUsername || password !== adminPassword) {
//       console.error('Authentication failed - incorrect credentials.');
//       return NextResponse.json({ error: 'Incorrect username or password' }, { status: 401 });
//     }

//     const token = generateToken(username);
//     return NextResponse.json({ token });
//   } catch (error: unknown) {
//     console.error('Login error:', error);
//     return NextResponse.json({ error: 'Server error' }, { status: 500 });
//   }
// }

// function generateToken(username: string): string {
//   const payload = { username };
//   const secret = process.env.JWT_SECRET;
//   if (!secret) {
//     throw new Error('JWT_SECRET environment variable is not set');
//   }
//   const token = jwt.sign(payload, secret, { expiresIn: '1h' });
//   return token;
// }
import { NextRequest, NextResponse } from 'next/server';
import { SignJWT } from 'jose';

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();
    console.log('Received username:', username);
    console.log('Received password:', password);

    const adminUsername = process.env.ADMIN_USERNAME;
    const adminPassword = process.env.ADMIN_PASSWORD;
    console.log('adminUsername:', adminUsername);
    console.log('adminPassword:', adminPassword);

    if (!adminUsername || !adminPassword || username !== adminUsername || password !== adminPassword) {
      console.error('Authentication failed - incorrect credentials.');
      return NextResponse.json({ error: 'Incorrect username or password' }, { status: 401 });
    }

    const token = await generateToken(username);
    return NextResponse.json({ token });
  } catch (error: unknown) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

async function generateToken(username: string): Promise<string> {
  const payload = { username };
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT_SECRET environment variable is not set');
  }

  // Generate token with jose's SignJWT class
  const jwt = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(new TextEncoder().encode(secret));

  return jwt;
}