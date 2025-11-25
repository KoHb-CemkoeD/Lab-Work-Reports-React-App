<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:foo="http://www.foo.org/" xmlns:bar="http://www.bar.org">
<xsl:template match="/">
  <html>
  <body>
	<h2>TV Guide</h2>
	<table border="1" cellpadding="10" cellspacing="0">
      <xsl:for-each select="TVGUIDE/SHOW[DATE/DAY &gt; '17']">
      <tr>
	    <td>
		  <b>
		    <xsl:value-of select="CHANELL"/>
		  </b>
		</td>
		<td>
		  <p>
		    <b>
  			  <xsl:value-of select="@Name"/>
			</b>, 
			<i>
			  <xsl:value-of select="JANRE"/>
			</i>
		  </p>
		  <p>
		    <xsl:value-of select="STARTTIME"/> | 
			<xsl:value-of select="DATE/DAY/@DayOfWeek"/>, 
			<xsl:value-of select="DATE/DAY"/>.
			<xsl:value-of select="DATE/MONTH"/>.
			<xsl:value-of select="DATE/YEAR"/> | 
			Duration: 
			<xsl:value-of select="DURATION"/>
		  </p>
		</td>
      </tr>
      </xsl:for-each>
    </table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>