import PageDescription from "@/components/PageDescription";
import Image from "next/image";
import { Box, Button, Grid, Chip } from "@mui/material";
import { NextSeo } from "next-seo";
import Link from "next/link";

function Project({ project }) {
    return( 
        <>
            <NextSeo
            title={project.name}
            description={project.description}
            openGraph={{
                title: 'Title',
                description: 'Description for the project',
                url: 'google.com',
                image: 'https://d33wubrfki0l68.cloudfront.net/19c708670a1f21231c1e2efa6ba38dbf52b15343/3237e/assets/jpeg/dopefolio.jpeg',
                type: 'websites',
            }}
            >            
            </NextSeo>
            <Grid container direction='column' alignItems='center' justifyContent='center' rowGap={2}>
                <PageDescription
                title={project.name}
                description={project.name}
                />
                <Box textAlign='center'>
                    <Button variant='contained' size='large'>Project link</Button>
                </Box>
                <Box>
                    <Image src={project.imageUrl} width={900} height={550} alt="Image Project" />
                </Box>
                <h1>Project overview</h1>
                <Box>
                    <span>Project description</span>
                </Box>
                <h1>Tools used</h1>
                <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                    {project.tools.map((tool) => (
                        <Chip key={tool} label={tool} variant='outlined' />
                    ))}
                </Box>
                <Link href='/projects'>
                    <Button variant='contained' size='large'>
                        Go back
                    </Button>
                </Link>
            </Grid>
        </>
    );
}

// export async function getServerSideProps(context) {
//     const id = context.params.id;
//     try {
//         const response = await fetch(`http://localhost:3000/api/projects/${id}`);
//         const project = await response.json();
//         return {
//             props: {
//                 project,
//             },
//         }
//     } catch(error) {
//         console.log(error);
//     }
// }

export async function getStaticPaths() {
    try {
        const response = await fetch('http://localhost:3000/api/projects/');
        const projects = response.json();
        const paths = projects.map((project) => {
            return { params: {id: project._id.toString()} };
        });
        return {
            paths,
            fallback: "blocking",
        };
    } catch(error) {
        console.log(error);
    }
}

export async function getStaticProps({params}) {
    try {
        const response = await fetch(`http://localhost:3000/api/projects/${params.id}`);
        const project = await response.json();
        return{
            props: {
                project,
            },
            revalidate: 5,
        };
    }
    catch(error) {
        return{notFound: true};
    }
}

export default Project;