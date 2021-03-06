import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { ThemeProvider, newskitLightTheme, Link, Block, Visible, Divider, DateTime, Grid, Cell, Form, TextInput, Button } from 'newskit'

// timing for yarn dev: 28.21sec
// timing for yarn dev with getServerSideProps: 31.01sec
export default function Home() {
  return (
    <ThemeProvider theme={newskitLightTheme}>

      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            This is Home Page
            <Link href="/next-page">
              Go to next page
            </Link>
          </h1>

          <Grid
            data-testid="PageLayout"
            mdColumnGutter="sizing050"
            xsColumnGutter="sizing000"
            xsRowGutter="sizing000"
            xsMargin="sizing000"
          >
            <Cell xs={12} md={10} data-testid="MainColumn">
              <Visible md lg>
              <Form onSubmit={() => {}}>
                <Block overrides={{spaceStack: 'space050'}}>
                  <TextInput
                    label="Email"
                    name="email"
                  />
                </Block>
                <Block overrides={{spaceStack: 'space050'}}>
                  <TextInput
                    label="Username"
                    name="username"
                  />
                </Block>
                <Button type="submit">Submit</Button>
              </Form>
              </Visible>
              <Block
                data-testid="Block"
                aria-label="Date and time"
                overrides={{ spaceStack: 'space030' }}
              >
                <DateTime
                  date={'2020-09-03T11:04:15Z'}
                  dateFormat="eee MMMM d yyyy, h:mmaaaaa'm'"
                  prefix={'Updated: '}
                  suffix="The NewsKit Daily"
                />
              </Block>
              <Visible md lg>
                <Block
                  data-testid="Block"
                  aria-label="Divider"
                  overrides={{ spaceStack: 'space040' }}
                >
                  <Divider />
                </Block>
              </Visible>
            </Cell>
          </Grid>
        </main>
      </div>
    </ThemeProvider>
  )
}


export async function getServerSideProps() {

  return {
    props: {
    },
  }
}
