import { Stack, Typography } from '@mui/material';

import Image from 'next/image';
import Link from 'next/link';

export type MarketingPanelProps = unknown;

const MarketingPanel: React.FC<MarketingPanelProps> = props => (
    <Stack direction="column" spacing={5}>
        <Link href="/">
            <Image src="./logo-white.svg" width={231} height={136} alt="logo" />
        </Link>
        <Typography variant="h1" component="div" color="white">
            Simple. Flexible. Empowering.
        </Typography>
        <Typography variant="h3" color="white">
            A gradebook that thinks like you do.
        </Typography>
        <Typography paragraph variant="subtitle1" color="white">
            Learning Portrait was built from the ground up to think like, and
            support, the classrooms of the most progressive K-12 educators -
            allowing educators, students, families and school systems to finally
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            monitor learning in a way that makes sense. Students aren't numbers.
            They are learners. See the portrait of what they can do.
        </Typography>
    </Stack>
);

export default MarketingPanel;
