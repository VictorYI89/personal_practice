<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%
    	String noticeSeq = request.getParameter("seq");
    	String noticeTitle = request.getParameter("title");
    %>
    
<%@ page import = "java.sql.Connection" %>
<%@ page import = "java.sql.DriverManager" %>
<%@ page import = "java.sql.PreparedStatement" %>
<%@ page import = "java.sql.ResultSet" %>
<%@ page import = "java.sql.SQLException" %>
<%@ page import = "com.starbucks.utils.DBManager" %>
<%
	String searchKeyword = request.getParameter("search");
%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 1. 탭 타이틀 세팅 -->
    <title>Starbucks Coffee Korea</title>
    <!-- 2. favicon(favorite icon) 세팅 -->
    <link rel="shortcut icon" href="./favicon.ico" />
    <link rel="icon" href="./favicon.png" />
    <!-- 3. reset.css 세팅(cdn) -->
    <link href="https://cdn.jsdelivr.net/npm/reset-css@5.0.2/reset.min.css" rel="stylesheet">
    <!-- 4. 커스템 css파일 세팅(local) -->
    <link href="./css/main.css" rel="stylesheet">
    <link rel="stylesheet" href="./css/notice.css">
    <!-- 5. 폰트 설정 -->
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap" rel="stylesheet" />
    <!-- 6. 아이콘 설정 --> 
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <!-- 7. 오픈 그래프 설정(더 많은 속성을 보고 싶으면 https://ogp.me) -->
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Starbucks" />
    <meta property="og:title" content="Starbucks Coffee Korea" />
    <meta property="og:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
    <meta property="og:image" content="./images/starbucks_seo.jpg" />
    <meta property="og:url" content="https://starbucks.co.kr" /> 
    <!-- 8. 자바 스크립트 설정 -->
    <!-- <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script> -->
    <script src="./js/jquery-3.7.1.js"></script>
    <!-- lodash -->
    <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js" integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> -->
    <!-- gsap js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js" integrity="sha512-IQLehpLoVS4fNzl7IfH8Iowfm5+RiMGtHykgZJl9AWMgqx0AmJ6cRWcB+GaGVtIsnC4voMfm8f2vwtY+6oPjpQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollToPlugin.min.js" integrity="sha512-nTHzMQK7lwWt8nL4KF6DhwLHluv6dVq/hNnj2PBN0xMl2KaMm1PM02csx57mmToPAodHmPsipoERRNn4pG7f+Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js" integrity="sha512-8E3KZoPoZCD+1dgfqhPbejQBnQfBXe8FuwL4z/c8sTrgeDMFEnoyTlH3obB4/fV+6Sg0a0XF+L/6xS4Xx1fUEg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <!-- swiper 6.8.4 -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/6.8.4/swiper-bundle.min.js" integrity="sha512-BABFxitBmYt44N6n1NIJkGOsNaVaCs/GpaJwDktrfkWIBFnMD6p5l9m+Kc/4SLJSJ4mYf+cstX98NYrsG/M9ag==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/6.8.4/swiper-bundle.min.css" integrity="sha512-aMup4I6BUl0dG4IBb0/f32270a5XP7H1xplAJ80uVKP6ejYCgZWcBudljdsointfHxn5o302Jbnq1FXsBaMuoQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script defer src="./js/youtube.js"></script>
    <script defer src="./js/main.js"></script>
    <script defer src="./js/notice.js"></script>
</head>
<body>
	<%@ include file="./header.jsp" %>
	
    <section class="">
        <div class="inner sub_tit_wrap">
            <div class="sub_tit_inner">
                <h2><img src="https://www.starbucks.co.kr/common/img/whatsnew/notice_tit.jpg" alt="공지사항"></h2>
               	<ul class="smap">
               		<li><a href="/starbucks-homepage"><img src="https://image.istarbucks.co.kr/common/img/common/icon_home.png" alt="홈으로"></a></li>
               		<li><img src="https://image.istarbucks.co.kr/common/img/common/icon_arrow.png" alt="홈으로"></li>
               		<li><a href="#">WHAT'S NEW</a></li>
               		<li><img src="https://image.istarbucks.co.kr/common/img/common/icon_arrow.png" alt="홈으로"></li>
               		<li><a href="#">공지사항</a>
               	</ul>
            </div>
            <div class="news_sch_wrap">
            	<div class="sch_items">
					<input type="text" name="sch_bar" id="sch_bar"
						placeholder="검색어를 입력해 주세요." />
					<a href="javascript: searchNotice();" class="btn new-board-search-btn">검색</a>
               	</div>
            </div>
        </div>
    </section>
    
    <!-- notice list -->
    <section class="">
    	<div class="inner notice_list">
	    	<div class="notice_header">
	    		<div class="notice_no">NO</div>
	    		<div class="notice_title">제목</div>
	    		<div class="notice_regdate">날짜</div>
	    		<div class="notice_hit">조회수</div>
	    	</div>
	    	
			<%
			//DB접속 객체 가져오기
			Connection conn = DBManager.getDBConnection();

			//DB조회쿼리 실행하여 DB에 있는 데이터 값 가져오기
			PreparedStatement pstmt = null;
			ResultSet rs = null;
			try {
				//String selectSql = "SELECT * FROM board ORDER BY seq DESC";
				String selectSql;
				if (searchKeyword != null & searchKeyword != "") {
					selectSql = "SELECT * FROM board WHERE TITLE LIKE '%" 
						+ searchKeyword + "%' ORDER BY seq DESC";
				} else {
					selectSql = "SELECT * FROM board ORDER BY seq DESC";
				}

				pstmt = conn.prepareStatement(selectSql);
				rs = pstmt.executeQuery(); // sql실행

				while (rs.next()) {
			%>
	    	
	    	<div class="notice_list_items">
	    		<ul>
	    			<li><%= rs.getString("SEQ") %></li>
	    			<a href=/starbucks-homepage/notice_detail.jsp?seq=<%= rs.getString("SEQ")%>&title=<%= rs.getString("TITLE") %>><li><%= rs.getString("TITLE") %></li></a>
	    			<li><%= rs.getDate("CREATE_DATE") %></li>
	    			<li><%= rs.getInt("READ_COUNT") %></li>
	    		</ul>
	    	</div>
	    	
	    	<%
	    		} 
	    	} catch(SQLException se) {
	    		System.out.println("게시판 조회 쿼리 실행 오류: " + se.getMessage());
	    	} finally {
	    		if (rs != null) try { rs.close(); } catch (SQLException ex) {}
	    	  	if (pstmt != null) try { pstmt.close(); } catch (SQLException ex) {}
	    	  	if (conn != null) try { conn.close(); } catch (SQLException ex) {}
	    	}
	    	
	    	%>
	    		
    	</div>
    </section>
	<%@ include file="./footer.jsp" %>
	<%-- <jsp:include page="./footer.jsp"/>  위의 footer표시하는것과 같은 기능--%>
</body>
</html>