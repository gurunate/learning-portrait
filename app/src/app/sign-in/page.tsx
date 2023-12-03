import SignIn from '@/components/sign-in';
import styles from './page.module.css';

const Page = () => {
    return (
        <main className={styles.main}>
            <SignIn />
        </main>
    );
};

export default Page;
