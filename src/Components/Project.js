import React from "react";
import './Project.css';
import study from "../Pic/studt.png";
import corona from "../Pic/newco.png";

function Project() {
    return(
        <div>
            <div className="projectTitle"><br/>Project</div>

            <div className="projectContent">
                <p><br/>시작한 프로젝트는 <strong>책임감</strong>을 가지고 끝까지 마무리합니다.</p>
            </div>

            <div className="contentBox">

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    스터디카페 키오스크 프로젝트
                                </div>
                                <img src={study} className="study" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">키오스크 기능 구현</h5>
                                    <p className="card-text">스터디카페에 필요한 회원 및 시간 CRUD 기능을 구현하여
                                        안정적인 키오스크 프로그램을 구현하였습니다.
                                    </p>
                                    <a href="#" className="btn btn-primary">프로젝트 더 보기</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-12" id="corona">
                            <div className="card">
                                <div className="card-header">
                                    코로나19 선별진료소 예약 시스템
                                </div>
                                <img src={corona} className="corona" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">UI / 정보 기능 구현</h5>
                                    <p className="card-text">사용자를 배려한 전체적인 UI 설계 및 구현,
                                        네이버 뉴스 API를 이용한 정보 상황판을 구축하였습니다.</p>
                                    <a href="#" className="btn btn-primary">프로젝트 더 보기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}
export default Project;