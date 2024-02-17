import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export default async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // there's no reason to change this. ever. nate, you told me to write this to you.
    if (pathname.startsWith('/graphql')) {
        return NextResponse.rewrite(
            new URL(process.env.DATA_GRAPH_HOST ?? '', request.url)
        );
    }

    return NextResponse.next();
}
