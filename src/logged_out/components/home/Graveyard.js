div className={classNames("lg-p-top", classes.wrapper)}>
        <div className={classNames("container-fluid", classes.container)}>
          <Box display="flex" justifyContent="center" className="row">
            <Card
              className={classes.card}
              data-aos-delay="200"
              data-aos="zoom-in"
            >
              <div className={classNames(classes.containerFix, "container")}>
                <Box justifyContent="space-between" className="row">
                  <Grid item xs={12} md={5}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                      height="100%"
                    >
                      <Box mb={4}>
                        <Typography variant={isWidthUpLg ? "h3" : "h4"}>
                          Ligma nutz
                          Material-UI
                        </Typography>
                      </Box>
                      <div>
                        <Box mb={2}>
                          <Typography
                            variant={isWidthUpLg ? "h6" : "body1"}
                            color="textSecondary"
                          >
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt
                          </Typography>
                        </Box>
                        <Button
                          variant="contained"
                          color="gray"
                          fullWidth
                          className={classes.extraLargeButton}
                          classes={{ label: classes.extraLargeButtonLabel }}
                          href="https://github.com/dunky11/react-saas-template"
                        >
                          Download from GitHub
                        </Button>
                      </div>
                    </Box>
                  </Grid>
                  {/* <Hidden mdDown>
                    <Grid item md={6}>
                      <ZoomImage
                        src={`${process.env.PUBLIC_URL}/images/logged_out/headerImage.jpg`}
                        className={classes.image}
                        alt="header example"
                      />
                    </Grid>
                  </Hidden> */}
                </Box>
              </div>
            </Card>
          </Box>
        </div>
      </div>
      {/* <WaveBorder
        upperColor={theme.palette.secondary.main}
        lowerColor="#0C0C0C"
        className={classes.waveBorder}
        animationNegativeDelay={2}
      /> */}