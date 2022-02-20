import React from 'react'

function HomePageSectionHeader(props) {
    return (
        <>
            <div style={{
                display: "block",
                textAlign: "center",
                margin: "2rem 0"
            }}>
                <h2 style={{
                    backgroundColor: "#00524B",
                    color: "white",
                    display: "inline-block",
                    padding: "1.6rem",
                    fontSize: "2.5rem",
                    whiteSpace: "nowrap",
                    borderRadius: "1rem",
                    fontWeight: "300",
                }}

                >{props.sectionHeader}</h2>
            </div>
        </>
    )
}

export default HomePageSectionHeader