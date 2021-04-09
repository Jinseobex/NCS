import React from "react";
import './Summary.css';

function Summary() {
    return(
        <div className="summaryWrapper">
            <div className="summaryTitle"><p>SUMMARY</p></div>
            <div className="summaryContent">
                <div>안녕하세요. 개발자를 꿈꾸는 <strong>김진섭</strong> 입니다.
                상상만 했던 것을 실제로, 손으로 만들 수 있다는 사실에 개발자에 큰 매력을 느낍니다.
                <strong>Back-End, Front-End 모두 아우르는 Full-Stack</strong> 개발자를 목표로 하고 있지만,
                    React, JavaScript를 필두로 한 <strong>Front-End</strong>에 더 큰 매력을 느끼고 있습니다.
                </div>
            </div>
        </div>
    );
}
export default Summary;