import React from "react"
import { graphql } from "gatsby"
import Meta from "../components/Meta"
import Education from "../components/Education"
import Volunteering from "../components/Volunteering"
import Work from "../components/Work"
import Skills from "../components/Skills"

const Resume = ({ data }) => {
  const {
    metas,
    programs,
    organizations,
    vervRoles,
    paidRoles,
    projects,
  } = data

  return (
    <div className="resume">
      <Meta me={metas.nodes[0]} />
      <Education programs={programs.nodes} />
      <Volunteering
        organizations={organizations.nodes}
        roles={vervRoles.nodes}
      />
      <Work organizations={organizations.nodes} roles={paidRoles.nodes} />
      <Skills projects={projects.nodes} />
    </div>
  )
}

export default Resume

export const query = graphql`
  {
    metas: allSanityMeta {
      nodes {
        ...MetaFragment
      }
    }
    programs: allSanityProgram {
      nodes {
        id
        ...ProgramFragment
      }
    }
    organizations: allSanityOrganization {
      nodes {
        id
        name
        city
        country
      }
    }
    vervRoles: allSanityRole(
      filter: { paid: { eq: false } }
      sort: { fields: start_date }
    ) {
      nodes {
        long_name
        start_date
        end_date
        organization {
          id
          name
        }
      }
    }
    paidRoles: allSanityRole(
      filter: { paid: { eq: true } }
      sort: { fields: start_date }
    ) {
      nodes {
        long_name
        start_date
        end_date
        organization {
          id
          name
        }
      }
    }
    projects: allSanityProject {
      nodes {
        learned_technologies
      }
    }
  }
`