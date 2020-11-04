import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { ThemeProvider, newskitLightTheme, Block, Link, Visible, Divider, DateTime, Grid, Cell } from 'newskit'

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
            This is NEXT page
            <Link href="/">
              Go back to home
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
                <Block
                  data-testid="Block"
                  aria-label="Divider"
                  overrides={{ spaceStack: 'space030' }}
                >
                  <Divider />
                </Block>
              </Visible>

              <Visible md lg>
                <Block
                  data-testid="Block"
                  aria-label="Divider"
                  overrides={{ spaceStack: 'space030' }}
                >
                  <Divider />
                </Block>
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
